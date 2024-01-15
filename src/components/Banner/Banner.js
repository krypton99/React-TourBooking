import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')}>{children}</div>
        </div>
    );
}

export default Banner;
