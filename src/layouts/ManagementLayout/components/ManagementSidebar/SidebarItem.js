import classNames from 'classnames/bind';
import styles from './ManagementSidebar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarItem({ icon, title, to }) {
    return (
        <Link to={to} className={cx('item-wrapper')}>
            <span className={cx('item-icon')}>{icon}</span>
            <span className={cx('item-title')}>{title}</span>
        </Link>
    );
}

export default SidebarItem;
