import classNames from 'classnames/bind';
import styles from './TrendingTours.module.scss';
import TourItem from './TourItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function TrendingTours() {
    const [tours, setTours] = useState([]);

    const textMinimize = (text, maxWord) => {
        const words = text.split(' ');
        if (words.length > maxWord)
            return words.splice(0, maxWord).join(' ') + '...';
        return text;
    };

    const getTours = async () => {
        const response = await axios.get(
            'http://localhost:3001/api/tours/?top=4',
        );
        const tours = response.data;
        tours.forEach((tour) => {
            tour.description = textMinimize(tour.description, 40);
        });
        setTours(tours);
    };

    useEffect(() => {
        getTours();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <h3 className={cx('label')}>TRENDY</h3>
                <h3 className={cx('title')}>Our Trending Tour Pakages</h3>
                <div className={cx('grid__row')}>
                    {tours.map((tour) => {
                        return (
                            <div
                                key={tour.id}
                                className={cx('grid__column l-3 m-6 c-6')}
                            >
                                <TourItem data={tour} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TrendingTours;
