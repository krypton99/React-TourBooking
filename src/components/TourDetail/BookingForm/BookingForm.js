import classNames from 'classnames/bind';
import styles from './BookingForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMailBulk,
    faPhone,
    faTags,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faMessage } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function BookingForm() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Book this tour</h3>
            <form className={cx('book-form')}>
                <div className={cx('form-group')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                    <input name="name" placeholder="Name" type="text" />
                </div>
                <div className={cx('form-group')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faMailBulk} />
                    <input name="email" placeholder="Email" type="email" />
                </div>
                <div className={cx('form-group')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                    <input name="phone" placeholder="Phone" type="text" />
                </div>
                <div className={cx('form-group')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
                    <input name="date" placeholder="dd-mm-yy" type="date" />
                </div>
                <div className={cx('form-group')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faTags} />
                    <input
                        name="amount"
                        placeholder="Number of ticket"
                        type="text"
                    />
                </div>
                <div className={cx('form-group')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faMessage} />
                    <textarea name="message" placeholder="Message"></textarea>
                </div>
                <Button className={cx('form-button')} primary type="button">
                    Check availability
                </Button>
                <div></div>
                <Button className={cx('form-button')} primary type="submit">
                    Book now
                </Button>
            </form>
        </div>
    );
}

export default BookingForm;
