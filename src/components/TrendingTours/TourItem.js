import classNames from 'classnames/bind';
import styles from './TrendingTours.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faStar } from '@fortawesome/free-solid-svg-icons';
import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function TourItem({ data }) {
    return (
        <div className={cx('tour-wrapper')}>
            <img
                src={data.avatar_tour}
                alt={data.name}
                className={cx('tour-image')}
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/2048px-Flag_of_Switzerland.svg.png"
                alt=""
                className={cx('tour-nation')}
            />
            <ul className={cx('tour-info-list')}>
                <li className={cx('tour-info-item')}>
                    <FontAwesomeIcon
                        className={cx('tour-info-icon')}
                        icon={faCalendar}
                    />
                    <span className={cx('tour-info-label')}>8 Days</span>
                </li>
                <li className={cx('tour-info-item')}>
                    <FontAwesomeIcon
                        className={cx('tour-info-icon')}
                        icon={faUser}
                    />
                    <span className={cx('tour-info-label')}>
                        {data.time} Days
                    </span>
                </li>
            </ul>
            <div className={cx('tour-info')}>
                <p className={cx('tour-name')}>{data.end_place}</p>
                <div className={cx('tour-rating')}>
                    <FontAwesomeIcon
                        className={cx('tour-rating-icon')}
                        icon={faStar}
                    />
                    <FontAwesomeIcon
                        className={cx('tour-rating-icon')}
                        icon={faStar}
                    />
                    <FontAwesomeIcon
                        className={cx('tour-rating-icon')}
                        icon={faStar}
                    />
                    <FontAwesomeIcon
                        className={cx('tour-rating-icon')}
                        icon={faStar}
                    />
                    <FontAwesomeIcon
                        className={cx('tour-rating-icon')}
                        icon={faStar}
                    />
                </div>
            </div>
            <div className={cx('tour-location')}>
                <FontAwesomeIcon
                    className={cx('tour-location-icon')}
                    icon={faLocation}
                />
                <span className={cx('tour-location-info')}>Europe</span>
            </div>
            <div className={cx('tour-price')}>
                <span className={cx('tour-price-discount')}>1,000 $</span>
                <span className={cx('tour-price-origin')}>1,000 $</span>
            </div>
            <p className={cx('tour-desc')}>{data.description}</p>
            <Button primary>Explore now</Button>
        </div>
    );
}

export default TourItem;
