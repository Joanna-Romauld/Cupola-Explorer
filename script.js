
if (document.getElementById('map')) {
    const map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 13,
        attribution: '© OpenStreetMap contributors',
        maxBounds: [[-90, -180], [90, 180]],
        maxBoundsViscosity: 1.0,
        noWrap: true,
    }).addTo(map);

  
            const cupolaImages = [
  { lat: 14.7, lng: 26.8, caption: "Meidob Volcanic Field, Sudan", url: "images/ISS022-E-66972.jpg", desc: "A stunning view of the Meidob Volcanic Field in Sudan, showcasing the unique geological formations and volcanic activity in the region." },
  { lat: -12.5, lng: 35.5, caption: "Lake Malawi, Mozambique", url: "images/ISS023-E-32771 (1).jpg", desc: "An aerial view of Lake Malawi, one of the largest and most biodiverse lakes in Africa, located in Mozambique." },
  { lat: 25.0, lng: -79.0, caption: "Florida Everglades", url: "images/ISS025-E-13488.jpg", desc: "A breathtaking view of the Florida Everglades, a unique ecosystem known for its diverse wildlife and wetlands." },
   { lat: 8.9, lng: -84.5, caption: "Pacific Ocean", url: "images/ISS030-E-33277.jpg" , desc: "A mesmerizing view of the vast Pacific Ocean, highlighting its deep blue waters and expansive horizon."},
   { lat: 29.4, lng: 98.8, caption: "Asia", url: "images/ISS026-E-5407.jpg", desc: "A captivating view of Asia, showcasing its diverse landscapes and geographical features from above." },
   { lat: 43.1, lng: 13.2, caption: "Italy", url: "images/STS131-E-12892.jpg", desc: "A beautiful view of Italy, highlighting its rich cultural heritage and stunning landscapes." },
];


            const popup = document.getElementById('photo-popup');
            const titleEl = document.getElementById('photo-title');
            const imgEl = document.getElementById('photo-img');
            const descEl = document.getElementById('photo-desc');
            const closeBtn = document.getElementById('close-popup');

            // Add markers
            cupolaImages.forEach(loc => {
                if (!isNaN(loc.lat) && !isNaN(loc.lng)) {
                    const marker = L.marker([loc.lat, loc.lng]).addTo(map);
                    marker.on('click', () => {
                        titleEl.textContent = `${loc.caption}`;
                        imgEl.src = loc.url;
                        descEl.textContent = loc.desc;
                        popup.classList.add('active');
                    });
                }
            });

            closeBtn.addEventListener('click', () => {
                popup.classList.remove('active');
            });
        }
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

const starfield = document.querySelector('.starfield');
const numberOfStars = 150; // adjust for density
const viewportHeight = window.innerHeight;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('span');
    star.style.top = Math.random() * viewportHeight + 'px';
    star.style.left = Math.random() * 100 + '%';
    const size = Math.random() * 2 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = 2 + Math.random() * 3 + 's';
    starfield.appendChild(star);
}


document.querySelector('a[href="map.html"]').addEventListener('click', function(e) {
    e.preventDefault(); 

    const img = this.querySelector('img');
    const rect = img.getBoundingClientRect();

    img.style.position = 'fixed';
    img.style.top = rect.top + 'px';
    img.style.left = rect.left + 'px';
    img.style.width = rect.width + 'px';
    img.style.height = rect.height + 'px';
    img.style.transition = 'all 0.8s ease-in-out';
    img.style.zIndex = 10000;

    img.getBoundingClientRect();

    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%) scale(2)'; 
    img.style.width = '';
    img.style.height = '';

    setTimeout(() => {
        window.location.href = this.href;
    }, 800);
});
