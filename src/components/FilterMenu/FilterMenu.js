import classNames from 'classnames/bind';
import styles from './FilterMenu.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function FilterMenu() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <select className={cx('place')} name="place">
                        <option value="" disabled selected hidden>
                            Địa điểm?
                        </option>
                    </select>
                </li>
                <li className={cx('item')}>
                    <select className={cx('type')} name="type">
                        <option value="" disabled selected hidden>
                            Loại hình
                        </option>
                    </select>
                </li>
                <li className={cx('item-date')}>
                    <input
                        type="date"
                        className={cx('date')}
                        placeholder="Thời gian"
                    />
                </li>
            </ul>

            <Button primary>Gửi</Button>
        </div>
    );
}

export default FilterMenu;
