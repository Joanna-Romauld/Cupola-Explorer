// to check if we’re on map.html
if (document.getElementById('map')) {
    const map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 5,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // eexample nasa images with coordinates and data
    const cupolaPhotos = [
        {
            coords: [40.7, -74.0],
            title: "New York City, USA",
            img: "https://images-assets.nasa.gov/image/iss042e135486/iss042e135486~medium.jpg",
            desc: "A glittering night view of New York City as seen from the ISS."
        },
        {
            coords: [35.6, 139.7],
            title: "Tokyo, Japan",
            img: "https://images-assets.nasa.gov/image/iss042e135486/iss042e135486~medium.jpg",
            desc: "Tokyo lights up under the ISS orbit — home to over 37 million people."
        },
        {
            coords: [-33.9, 151.2],
            title: "Sydney, Australia",
            img: "https://images-assets.nasa.gov/image/iss066e082724/iss066e082724~medium.jpg",
            desc: "The Australian coast and city lights shimmer beneath the space station."
        },
        {
            coords: [28.6, 77.2],
            title: "New Delhi, India",
            img: "https://images-assets.nasa.gov/image/iss067e054425/iss067e054425~medium.jpg",
            desc: "India’s capital city, a vibrant mix of heritage and modernity."
        },
        {
            coords: [48.85, 2.35],
            title: "Paris, France",
            img: "https://images-assets.nasa.gov/image/iss042e135486/iss042e135486~medium.jpg",
            desc: "The ‘City of Light’ truly shines — captured by astronauts from orbit."
        }
    ];

    const popup = document.getElementById('photo-popup');
    const titleEl = document.getElementById('photo-title');
    const imgEl = document.getElementById('photo-img');
    const descEl = document.getElementById('photo-desc');
    const closeBtn = document.getElementById('close-popup');

    cupolaPhotos.forEach(loc => {
        const marker = L.marker(loc.coords).addTo(map);
        marker.on('click', () => {
            titleEl.textContent = loc.title;
            imgEl.src = loc.img;
            descEl.textContent = loc.desc;
            popup.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });
}

// to check if we’re on buoyancy.html
if (document.getElementById('buoyancy-container')) {
    const astronaut = document.getElementById('astronaut');
    let floatLevel = 0;

    const updatePosition = () => {
        astronaut.style.transform = `translateY(${floatLevel}px)`;
    };

    document.getElementById('add-weight').addEventListener('click', () => {
        floatLevel += 40; // sink
        updatePosition();
    });

    document.getElementById('remove-weight').addEventListener('click', () => {
        floatLevel -= 40; // float up
        updatePosition();
    });
}
