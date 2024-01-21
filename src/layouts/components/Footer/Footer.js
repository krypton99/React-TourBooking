import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookMessenger,
    faInstagram,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('grid__row')}>
                    <div className={cx('grid__column l-2-4 m-4 c-0')}>
                        <img src={images.logo2} alt="logo" />
                        <p className={cx('about')}>
                            Travel helps companies manage payments easily.
                        </p>
                        <ul className={cx('contact-list')}>
                            <li className={cx('contact-item')}>
                                <a href="/">
                                    <FontAwesomeIcon
                                        className={cx('icon')}
                                        icon={faLinkedin}
                                    />
                                </a>
                            </li>
                            <li className={cx('contact-item')}>
                                <a href="/">
                                    <FontAwesomeIcon
                                        className={cx('icon')}
                                        icon={faFacebookMessenger}
                                    />
                                </a>
                            </li>
                            <li className={cx('contact-item')}>
                                <a href="/">
                                    <FontAwesomeIcon
                                        className={cx('icon')}
                                        icon={faTwitter}
                                    />
                                </a>
                            </li>
                            <li className={cx('contact-item')}>
                                <a href="/">
                                    <FontAwesomeIcon
                                        className={cx('icon')}
                                        icon={faInstagram}
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid__column l-2-4 m-4 c-0')}>
                        <h3 className={cx('title')}>Company</h3>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <a href="/">About Us</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">About Us</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">About Us</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid__column l-2-4 m-4 c-0')}>
                        <h3 className={cx('title')}>Destinations</h3>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <a href="/">About Us</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">About Us</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">About Us</a>
                            </li>
                            <li className={cx('item')}>
                                <a href="/">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('grid__column l-4-8 m-12 c-12')}>
                        <label
                            htmlFor="subscribe-email"
                            className={cx('title')}
                        >
                            Join Our Newsletter
                        </label>
                        <form className={cx('subscribe-form')}>
                            <input
                                id="subscribe-email"
                                placeholder="Your email address"
                                type="text"
                                className={cx('input')}
                            />
                            <Button
                                primary
                                size="large"
                                className={cx('subscribe')}
                            >
                                Subscribe
                            </Button>
                        </form>
                        <p className={cx('note')}>
                            * Will send you weekly updates for your better tour
                            packages.
                        </p>
                    </div>
                </div>
                <div className={cx('footer-bottom')}>
                    <p className={cx('license')}>
                        Copyright TDN Corp. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
