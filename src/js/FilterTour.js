import axios from 'axios';

export default function FilterTour() {
    return {
        filters: {
            start_date: '',
            end_date: '',
            adult: '',
            child: '',
            category: ''
        },
        tours: [],
        filtered: [],
        loading: true,

        async init() {
            try {
                const { data } = await axios.get('/src/api/tours/tours.json');
                this.tours = data;
                this.filtered = data;

            } catch (e) {
                console.error("Veri alınamadı", e);
            } finally {
                this.loading = false;
            }
        },

        filterTours() {
            const { category, adult, child, start_date, end_date } = this.filters;

            this.filtered = this.tours.filter(tour => {
                return (
                    (!category || tour.category === category) &&
                    (!adult || tour.adult == adult) &&
                    (!child || tour.child == child) &&
                    (!start_date || new Date(tour.date) >= new Date(start_date)) &&
                    (!end_date || new Date(tour.date) <= new Date(end_date))
                );
            });
        }
    };
}
