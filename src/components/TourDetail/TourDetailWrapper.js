import classNames from 'classnames/bind';
import styles from './TourDetailWrapper.module.scss';
import TourDetailHeader from './TourDetailHeader/TourDetailHeader';
import Information from './Content/Information';
import Gallery from './Content/Gallery';
import BookingForm from './BookingForm';
import { Fragment, useEffect, useRef, useState } from 'react';
import TourPlan from './Content/TourPlan/TourPlan';
import Location from './Content/Location/Location';

const cx = classNames.bind(styles);

function TourDetailWrapper() {
    const [tab, setTab] = useState('information');

    let Comp = Information;

    switch (tab) {
        case 'information':
            Comp = Information;
            break;
        case 'gallery':
            Comp = Gallery;
            break;
        case 'tourplan':
            Comp = TourPlan;
            break;
        case 'location':
            Comp = Location;
            break;
        default:
            console.log('invalid tab');
    }

    return (
        <div className={cx('wrapper')}>
            <TourDetailHeader setTab={setTab} tab={tab} />
            <div className={cx('grid wide', 'body')}>
                <div className="grid__row">
                    <div className="grid__column lg-7 md-7 c-7">
                        <Comp />
                    </div>
                    <div className="grid__column lg-5 md-5 c-5">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourDetailWrapper;
