document.addEventListener('DOMContentLoaded', function() {
    const backgroundSlideshow = document.querySelector('.background-slideshow');
    const images = [
        'ghkjj.png', // Replace with your image paths
        'ggg.webp',
        'dghn.webp',
        'bg4.jpg'
    ];
    let currentIndex = 0;

    function changeBackground() {
        backgroundSlideshow.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Initial background set
    changeBackground();

    // Change background every 3 seconds (3000 milliseconds)
    setInterval(changeBackground, 3000);
});