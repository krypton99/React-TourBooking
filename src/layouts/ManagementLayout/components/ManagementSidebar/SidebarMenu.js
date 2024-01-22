import classNames from 'classnames/bind';
import styles from './ManagementSidebar.module.scss';

const cx = classNames.bind(styles);

function SidebarMenu({ title, children }) {
    return (
        <div className={cx('menu-wrapper')}>
            <h3 className={cx('menu-title')}>{title}</h3>
            {children}
        </div>
    );
}

export default SidebarMenu;
