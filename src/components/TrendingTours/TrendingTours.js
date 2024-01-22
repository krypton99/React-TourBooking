import classNames from 'classnames/bind';
import styles from './TrendingTours.module.scss';
import TourItem from './TourItem';
import { useEffect, useState } from 'react';
import * as tourServices from '~/services/TourServices';

const cx = classNames.bind(styles);

function TrendingTours() {
    const [tours, setTours] = useState([]);

    const textMinimize = (text, maxWord) => {
        const words = text.split(' ');
        if (words.length > maxWord)
            return words.splice(0, maxWord).join(' ') + '...';
        return text;
    };

    useEffect(() => {
        const handleApi = async () => {
            const tours = await tourServices.getTours(4);
            tours.forEach((tour) => {
                tour.description = textMinimize(tour.description, 40);
            });
            setTours(tours);
        };
        handleApi();
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
