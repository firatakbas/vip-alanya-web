import axios from "axios";


export default function tourDetail() {
    return {
        tour: null,
        slug: null,
        // loading: true,

        async init() {
            this.slug = this.getSlug();
            const data = await this.loadData();
            this.tour = this.findTourBySlug(data, this.slug);
        },
        // slug değerini al
        getSlug() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get("slug");
        },
        // json dosyasına istek yolla
        async loadData() {
            try {
                const response = await axios.get(`/api/tours/tours.json`);
                console.log(response.data)
                return response.data;
            } catch (error) {
                console.log(error)
            }
        },
        //slug'a göre turu bul
        findTourBySlug(data, slug) {
            return data.find((t) => t.slug === slug);
        },
    }
}