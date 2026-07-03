// --- Mobile Menu Logic ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// --- Image Carousel Logic (Only runs on Homepage) ---
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselImage = document.getElementById('carouselImage');

if (prevBtn && nextBtn && carouselImage) {
    const images = [
        "1.jpg",
        "2.jpg",
        "3.jpg"
    ];

    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        carouselImage.src = images[currentIndex];
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        carouselImage.src = images[currentIndex];
    });
}