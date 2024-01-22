import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import Hero from '~/components/Hero';
import FilterBar from '~/components/FilterBar';
import TourWrapper from './components/TourWrapper';
import TourItem from './components/TourItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Tour() {
    const [tours, setTours] = useState([]);

    const textMinimize = (text, maxWord) => {
        const words = text.split(' ');
        if (words.length > maxWord)
            return words.splice(0, maxWord).join(' ') + '...';
        return text;
    };

    const dateMinimize = (date) => {
        const index = date.indexOf('T17');
        if (index > 0) {
            return date.slice(0, index);
        }
        return date;
    };

    const getTours = async () => {
        const response = await axios.get(
            'http://localhost:3001/api/tours/?top=6',
        );
        const tours = response.data;
        tours.forEach((tour) => {
            tour.description = textMinimize(tour.description, 40);
            tour.start_time = dateMinimize(tour.start_time);
        });
        setTours(tours);
    };

    useEffect(() => {
        getTours();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('hero-container')}>
                <Hero />
            </div>
            <FilterBar className={cx('filter-bar')} />
            <TourWrapper>
                {tours.map((tour, index) => (
                    <TourItem key={index} data={tour} />
                ))}
            </TourWrapper>
        </div>
    );
}

export default Tour;
