import axios from "axios";

export default function getAllTours() {
    return {
        tours: [],
        async getTours() {
            try {
                const response = await axios.get('/api/tours/toursCategory.json')
                this.tours = response.data
            } catch (err) {
                console.error('Tur Kategorileri Çekilemedi:', err)
            }
        },

        init() {
            this.getTours()
        }
    }
}