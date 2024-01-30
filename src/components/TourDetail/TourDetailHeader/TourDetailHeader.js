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

function TourDetailHeader({ setTab, tab }) {
    return (
        <ul className={cx('wrapper')}>
            <button
                onClick={() => setTab('information')}
                className={cx(cx('item', tab === 'information' && 'active'))}
            >
                <FontAwesomeIcon className={cx('icon')} icon={faInfoCircle} />
                <span className={cx('label')}>Information</span>
            </button>
            <button
                onClick={() => setTab('tourplan')}
                className={cx('item', tab === 'tourplan' && 'active')}
            >
                <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
                <span className={cx('label')}>Tour plan</span>
            </button>
            <button
                onClick={() => setTab('location')}
                className={cx('item', tab === 'location' && 'active')}
            >
                <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                <span className={cx('label')}>Location</span>
            </button>
            <button
                onClick={() => setTab('gallery')}
                className={cx('item', tab === 'gallery' && 'active')}
            >
                <FontAwesomeIcon className={cx('icon')} icon={faImages} />
                <span className={cx('label')}>Gallery</span>
            </button>
        </ul>
    );
}

export default TourDetailHeader;
