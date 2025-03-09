import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/pastel/style.json?key=2B0WROf9CZe0AOX06sfr', // Используем демо-стиль
    center: [0, 20], // Центр карты
    zoom: 2
});

function createMarkerElement(radius) {
    const el = document.createElement('div');
    el.style.width = `${radius}px`;
    el.style.height = `${radius}px`;
    el.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
    el.style.borderRadius = '50%';
    el.style.border = '2px solid rgba(255, 0, 0, 0.8)';
    return el;
}

async function fetchCities() {
    const apiKey = 'agrognom228'; // Замените на ваш API ключ
    const url = `http://api.geonames.org/searchJSON?formatted=true&q=europe&cities=cities1000&username=${apiKey}&maxRows=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.geonames.map(city => ({
            name: city.name,
            population: city.population,
            coordinates: [city.lng, city.lat]
        }));
    } catch (error) {
        console.error('Error fetching cities:', error);
        return [];
    }
}

map.on('load', async () => {
    const cities = await fetchCities();

    cities.forEach(city => {
        // Добавляем маркер
        const radius = Math.sqrt(city.population) * 0.01;
        new maplibregl.Marker({
            element: createMarkerElement(radius),
            anchor: 'center'
        })
        .setLngLat(city.coordinates)
        .addTo(map);

        // Добавляем подпись
        map.addLayer({
            id: `label-${city.name}`,
            type: 'symbol',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: city.coordinates
                    },
                    properties: {
                        title: city.name
                    }
                }
            },
            layout: {
                'text-field': ['get', 'title'], // Текст подписи
                'text-size': 12, // Размер текста
                'text-offset': [0, 1.5], // Смещение текста относительно маркера
                'text-anchor': 'top' // Позиция текста
            },
            paint: {
                'text-color': '#000000', // Цвет текста
                'text-halo-color': '#FFFFFF', // Цвет обводки текста
                'text-halo-width': 1 // Ширина обводки
            }
        });
    });
});
