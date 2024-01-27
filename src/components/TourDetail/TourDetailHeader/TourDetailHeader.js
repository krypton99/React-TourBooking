import classNames from 'classnames/bind';
import styles from './TourDetailHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faImages } from '@fortawesome/free-regular-svg-icons';
import {
    faInfoCircle,
    faLocation,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function TourDetailHeader() {
    return (
        <ul className={cx('wrapper')}>
            <li className={cx('item', 'active')}>
                <FontAwesomeIcon className={cx('icon')} icon={faInfoCircle} />
                <span className={cx('label')}>Information</span>
            </li>
            <li className={cx('item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
                <span className={cx('label')}>Tour plan</span>
            </li>
            <li className={cx('item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                <span className={cx('label')}>Location</span>
            </li>
            <li className={cx('item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faImages} />
                <span className={cx('label')}>Gallery</span>
            </li>
        </ul>
    );
}

export default TourDetailHeader;
