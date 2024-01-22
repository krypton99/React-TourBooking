import classNames from 'classnames/bind';
import styles from './Tour.module.scss';
import Hero from '~/components/Hero';
import FilterBar from '~/components/FilterBar';
import TourWrapper from './components/TourWrapper';
import TourItem from './components/TourItem';
import { useEffect, useState } from 'react';
import * as tourServices from '~/services/TourServices';

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

    useEffect(() => {
        const handleApi = async () => {
            const tours = await tourServices.getTours(6);
            tours.forEach((tour) => {
                tour.description = textMinimize(tour.description, 40);
                tour.start_time = dateMinimize(tour.start_time);
            });
            setTours(tours);
        };
        handleApi();
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
