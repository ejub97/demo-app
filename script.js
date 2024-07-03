// import { Carousel, initTWE } from "https://cdn.jsdelivr.net/npm/tw-elements@1.0.0-alpha12/dist/js/index.min.js";
// initTWE({ Carousel });

// Function to load HTML content into a specific element
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data);
}


loadHTML('header', 'Components/header.html');
loadHTML('hero', 'Components/hero.html');
loadHTML('card', 'Components/card.html');
// loadHTML('carousel', 'Components/carousel.html');
loadHTML('footer', 'Components/footer.html');
