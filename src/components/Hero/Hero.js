import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import FilterMenu from '../FilterMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Hero() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>
                No matter where
                <br />
                you're going to, we'll
                <br />
                take you there
            </p>
            <FilterMenu className={cx('filter')} />
            <div className={cx('booked-user')}>
                <ul className={cx('list')}>
                    <li className={cx('list-item')}>
                        <img
                            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                            alt="user"
                            className={cx('avatar')}
                        />
                    </li>
                    <li className={cx('list-item')}>
                        <img
                            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                            alt="user"
                            className={cx('avatar')}
                        />
                    </li>
                    <li className={cx('list-item')}>
                        <img
                            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                            alt="user"
                            className={cx('avatar')}
                        />
                    </li>
                    <li className={cx('list-item')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                    </li>
                </ul>
                <span className={cx('book-info')}>
                    2,500 người đã đặt Sự kiện Tommorowland trong 24 giờ qua
                </span>
            </div>
        </div>
    );
}

export default Hero;
