export default function gallery() {
    return {
        selectedImage: '/images/carousel/home/slide1.webp',
        scrollContainer: null,
        scrollAmount: 150,
        images: [
            '/images/carousel/home/slide1.webp',
            '/images/carousel/home/slide2.webp',
            '/images/carousel/home/slide4.webp',
            '/images/carousel/home/slide1.webp',
            '/images/carousel/home/slide2.webp',
            '/images/carousel/home/slide4.webp',
            '/images/carousel/home/slide1.webp',
            '/images/carousel/home/slide2.webp',
            '/images/carousel/home/slide4.webp',
            '/images/carousel/home/slide1.webp',
            '/images/carousel/home/slide2.webp',
            '/images/carousel/home/slide4.webp',
        ],
        init() {
            this.scrollContainer = this.$refs.thumbContainer;
        },
        prev() {
            this.scrollContainer.scrollBy({left: -this.scrollAmount, behavior: 'smooth'});
        },
        next() {
            this.scrollContainer.scrollBy({left: this.scrollAmount, behavior: 'smooth'});
        }
    };
}