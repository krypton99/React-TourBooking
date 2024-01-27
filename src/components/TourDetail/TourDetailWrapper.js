import classNames from 'classnames/bind';
import styles from './TourDetailWrapper.module.scss';
import TourDetailHeader from './TourDetailHeader/TourDetailHeader';

const cx = classNames.bind(styles);

function TourDetailWrapper() {
    return (
        <div className={cx('wrapper')}>
            <TourDetailHeader />
            <div className="grid wide">
                <div className="grid__row">
                    <div className="grid__column lg-7 md-7 c-7">
                        <h3>Content here</h3>
                    </div>
                    <div className="grid__column lg-5 md-5 c-5">
                        <h3>Sidebar here</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourDetailWrapper;
