export default function carousel() {
    return {
        current: 0,
        images: [
            '/images/carousel/home/slide1.webp',
            '/images/carousel/home/slide2.webp',
            '/images/carousel/home/slide4.webp',
        ],
        next() {
            this.current = (this.current + 1) % this.images.length
        },
        prev() {
            this.current = (this.current - 1 + this.images.length) % this.images.length
        },
        start() {
            setInterval(() => this.next(), 5000)
        },
    }
}
