// tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./tours.html",
        "./cars.html",
        "./detail.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./public/layout/**/*.html",     // public/layout içindeki tüm HTML dosyalarını tara
        "./public/components/**/*.html"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}