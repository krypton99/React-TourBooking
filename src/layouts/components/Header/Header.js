import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [isScrollTop, setIsScrollTop] = useState(false);

    window.onscroll = () => {
        window.scrollY ? setIsScrollTop(false) : setIsScrollTop(true);
    };

    return (
        <header className={cx('wrapper', { top: !isScrollTop })}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="logo" />
                </Link>
                <Link to={config.routes.about} className={cx('link')}>
                    Giới thiệu
                </Link>
                <Link to={config.routes.services} className={cx('link')}>
                    Dịch vụ
                </Link>
                <Link to={config.routes.tour} className={cx('link')}>
                    Tour
                </Link>
                <div className={cx('actions')}>
                    <Button text>Đăng ký</Button>
                    <Button text>Đăng nhập</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
