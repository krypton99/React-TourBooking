import classNames from 'classnames/bind';
import styles from './FilterBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faSortAsc } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function FilterBar({ className }) {
    console.log(className);
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('grid wide')}>
                <form className={cx('form')}>
                    <div className={cx('input-group')}>
                        <FontAwesomeIcon
                            className={cx('input-icon')}
                            icon={faBed}
                        />
                        <input
                            className={cx('input')}
                            name="place"
                            type="text"
                        />
                    </div>
                    <div className={cx('input-group')}>
                        <FontAwesomeIcon
                            className={cx('input-icon')}
                            icon={faCalendar}
                        />
                        <input
                            className={cx('input')}
                            name="date"
                            type="text"
                        />
                    </div>
                    <a href="/" className={cx('input-group')}>
                        <FontAwesomeIcon
                            className={cx('input-icon')}
                            icon={faSortAsc}
                        />
                        Price
                    </a>
                </form>
            </div>
        </div>
    );
}

export default FilterBar;
