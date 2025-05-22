import './style.css'
import Alpine from "alpinejs"
import axios from "axios";

import carousel from "../public/components/carousel.js";
import gallery from "../public/components/gallery.js";
import getAllTours from "./js/getAllTours.js";
import FilterTour from "./js/FilterTour.js";

window.Alpine = Alpine
window.axios = axios
window.getAllTours = getAllTours
window.FilterTour = FilterTour

Alpine.data('carousel', carousel)
Alpine.data('gallery', gallery)
Alpine.data('FilterTour', FilterTour)

Alpine.start()

// Navbar yükle
fetch('/layout/navbar.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html
    })
    .catch(err => console.error('Navbar yüklenemedi:', err))

// footer yükle
fetch('/layout/footer.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html
    })
    .catch(err => console.log('Footer yüklenmedi:', err))


// Carousel HTML'ini yükle
fetch('/components/carousel.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('carousel').innerHTML = html
    })


// Gallery HTML'ini yükle
fetch('/components/gallery.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('gallery').innerHTML = html
    })