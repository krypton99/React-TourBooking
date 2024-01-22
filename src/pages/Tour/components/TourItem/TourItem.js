import classNames from 'classnames/bind';
import styles from './TourItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function TourItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img
                src={data.avatar_tour}
                alt={data.description}
                className={cx('tour-img')}
            />
            <ul className={cx('tour-info')}>
                <li className={cx('tour-info-item')}>
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className={cx('tour-info-desc')}>
                        {data.start_time}
                    </span>
                </li>
                <li className={cx('tour-info-item')}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className={cx('tour-info-desc')}>120+ People</span>
                </li>
            </ul>
            <p className={cx('tour-name')}>{data.name}</p>
            <p className={cx('tour-desc')}>{data.description}</p>
            <div className={cx('tour-footer')}>
                <span className={cx('tour-price')}>7.000.000đ</span>
                <span className={cx('tour-rate')}>
                    <FontAwesomeIcon icon={faStar} />
                    4.9
                </span>
            </div>
        </div>
    );
}

export default TourItem;
