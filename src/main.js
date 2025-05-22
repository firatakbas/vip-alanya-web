import './style.css'
import Alpine from "alpinejs"
import axios from "axios";

import carousel from "./components/carousel.js";
import gallery from "./components/gallery.js";

import getAllTours from "./js/getAllTours.js";
import FilterTour from "./js/FilterTour.js";
import tourDetail from "./js/tourDetail.js";

import getAllCars from "./js/getAllCars.js";
import FilterCar from "./js/FilterCar.js";

window.Alpine = Alpine
window.axios = axios

window.getAllTours = getAllTours
window.FilterTour = FilterTour

window.getAllCars = getAllCars
window.FilterCar = FilterCar

Alpine.data('carousel', carousel)
Alpine.data('gallery', gallery)
Alpine.data('FilterTour', FilterTour)
Alpine.data('tourDetail', tourDetail)

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