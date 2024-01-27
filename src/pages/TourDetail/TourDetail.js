import classNames from 'classnames/bind';
import styles from './TourDetail.module.scss';
import Hero from '~/components/Hero';
import TourDetailWrapper from '~/components/TourDetail/TourDetailWrapper';

const cx = classNames.bind(styles);

function TourDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('hero-container')}>
                <Hero />
            </div>
            <TourDetailWrapper />
        </div>
    );
}

export default TourDetail;
