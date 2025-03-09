import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/pastel/style.json?key=2B0WROf9CZe0AOX06sfr', // Используем демо-стиль
    center: [0, 20], // Центр карты
    zoom: 2
});

const cities = [
    { name: "New York", population: 8419000, coordinates: [-74.006, 40.7128] },
    { name: "London", population: 8982000, coordinates: [-0.1278, 51.5074] },
    { name: "Tokyo", population: 13960000, coordinates: [139.6917, 35.6895] },
    { name: "Moscow", population: 12655050, coordinates: [37.6173, 55.7558] },
    { name: "Beijing", population: 21710000, coordinates: [116.4074, 39.9042] },
    { name: "Paris", population: 2148000, coordinates: [2.3522, 48.8566] },
    { name: "Berlin", population: 3664000, coordinates: [13.4050, 52.5200] },
    { name: "Sydney", population: 5312000, coordinates: [151.2093, -33.8688] },
    { name: "Cairo", population: 9500000, coordinates: [31.2357, 30.0444] },
    { name: "Rio de Janeiro", population: 6748000, coordinates: [-43.1729, -22.9068] },
    { name: "Mumbai", population: 12478000, coordinates: [72.8777, 19.0760] },
    { name: "Shanghai", population: 26320000, coordinates: [121.4737, 31.2304] },
    { name: "Los Angeles", population: 3971000, coordinates: [-118.2437, 34.0522] },
    { name: "Toronto", population: 2930000, coordinates: [-79.3832, 43.6532] },
    { name: "Dubai", population: 3331000, coordinates: [55.2708, 25.2048] },
    { name: "Singapore", population: 5686000, coordinates: [103.8198, 1.3521] },
    { name: "Istanbul", population: 15520000, coordinates: [28.9784, 41.0082] },
    { name: "Seoul", population: 9776000, coordinates: [126.9780, 37.5665] },
    { name: "Mexico City", population: 9209944, coordinates: [-99.1332, 19.4326] },
    { name: "Bangkok", population: 10539000, coordinates: [100.5018, 13.7563] },
    { name: "Lagos", population: 14800000, coordinates: [3.3792, 6.5244] },
    { name: "Johannesburg", population: 5570000, coordinates: [28.0473, -26.2041] },
    { name: "Buenos Aires", population: 3054000, coordinates: [-58.3816, -34.6037] },
    { name: "Mumbai", population: 12478000, coordinates: [72.8777, 19.0760] },
    { name: "Delhi", population: 31181000, coordinates: [77.1025, 28.7041] },
    { name: "Karachi", population: 15741000, coordinates: [67.0099, 24.8615] },
    { name: "Dhaka", population: 21263000, coordinates: [90.4125, 23.8103] },
    { name: "Manila", population: 13482000, coordinates: [120.9842, 14.5995] },
    { name: "São Paulo", population: 12330000, coordinates: [-46.6333, -23.5505] },
    { name: "Kinshasa", population: 14987000, coordinates: [15.2663, -4.4419] },
    { name: "Lima", population: 11079000, coordinates: [-77.0428, -12.0464] },
    { name: "Jakarta", population: 10750000, coordinates: [106.8650, -6.1751] },
    { name: "Lahore", population: 11126000, coordinates: [74.3587, 31.5204] },
    { name: "Bangalore", population: 12635000, coordinates: [77.5946, 12.9716] },
    { name: "Chennai", population: 10564000, coordinates: [80.2707, 13.0827] },
    { name: "Kolkata", population: 14974000, coordinates: [88.3639, 22.5726] },
    { name: "Hyderabad", population: 9746000, coordinates: [78.4867, 17.3850] },
    { name: "Bogotá", population: 7744000, coordinates: [-74.0721, 4.7110] },
    { name: "Tehran", population: 8693700, coordinates: [51.3890, 35.6892] },
    { name: "Baghdad", population: 8765000, coordinates: [44.3661, 33.3152] },
    { name: "Riyadh", population: 7707000, coordinates: [46.6753, 24.7136] },
    { name: "Hong Kong", population: 7507000, coordinates: [114.1694, 22.3193] },
    { name: "Barcelona", population: 1620000, coordinates: [2.15899, 41.38879] },
    { name: "Rome", population: 2873000, coordinates: [12.4964, 41.9028] },
    { name: "Madrid", population: 3266000, coordinates: [-3.7038, 40.4168] },
    { name: "Amsterdam", population: 821000, coordinates: [4.8952, 52.3702] },
    { name: "Vienna", population: 1897000, coordinates: [16.3738, 48.2082] },
    { name: "Prague", population: 1309000, coordinates: [14.4378, 50.0755] },
    { name: "Warsaw", population: 1794000, coordinates: [21.0122, 52.2297] },
    { name: "Budapest", population: 1756000, coordinates: [19.0402, 47.4979] },
    { name: "Athens", population: 664000, coordinates: [23.7275, 37.9838] },
    { name: "Copenhagen", population: 805000, coordinates: [12.5683, 55.6761] },
    { name: "Stockholm", population: 975000, coordinates: [18.0686, 59.3293] },
    { name: "Oslo", population: 702000, coordinates: [10.7522, 59.9139] },
    { name: "Helsinki", population: 658000, coordinates: [24.9384, 60.1699] },
    { name: "Dublin", population: 554000, coordinates: [-6.2603, 53.3498] },
    { name: "Lisbon", population: 505000, coordinates: [-9.1393, 38.7223] },
    { name: "Brussels", population: 1210000, coordinates: [4.3517, 50.8503] },
    { name: "Zurich", population: 415000, coordinates: [8.5417, 47.3769] },
    { name: "Geneva", population: 201000, coordinates: [6.1432, 46.2044] },
    { name: "Luxembourg", population: 125000, coordinates: [6.1296, 49.8153] },
    { name: "Reykjavik", population: 131000, coordinates: [-21.8278, 64.1466] },
    { name: "Valletta", population: 5800, coordinates: [14.5146, 35.8989] },
    { name: "San Marino", population: 4000, coordinates: [12.4578, 43.9424] },
    { name: "Vaduz", population: 5500, coordinates: [9.5218, 47.1410] },
    { name: "Andorra la Vella", population: 22600, coordinates: [1.5218, 42.5063] },
    { name: "Monaco", population: 39000, coordinates: [7.4236, 43.7384] },
    { name: "Vatican City", population: 800, coordinates: [12.4534, 41.9029] },
    { name: "Krasnoyarsk", population: 1095000, coordinates: [92.8526, 56.0184] }, 
    { name: "Gelendzhik", population: 75000, coordinates: [38.0806, 44.5622] },
];

cities.forEach(city => {
    const radius = Math.sqrt(city.population) * 0.01; // Размер окружности зависит от населения
    new maplibregl.Marker({
        element: createMarkerElement(radius),
        anchor: 'center'
    })
    .setLngLat(city.coordinates)
    .addTo(map);
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

map.on('load', () => {
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
