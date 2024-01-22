import classNames from 'classnames/bind';
import styles from './ManagementSidebar.module.scss';
import SidebarMenu from './SidebarMenu';
import SidebarItem from './SidebarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ManagementSidebar() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('sidebar-title')}>Admin</h3>
            <div className={cx('content')}>
                <SidebarMenu title="Tour">
                    <SidebarItem
                        title="Tour"
                        to="/admin/tour"
                        icon={<FontAwesomeIcon icon={faGear} />}
                    />
                    <SidebarItem
                        title="Tour"
                        to="/admin/tour"
                        icon={<FontAwesomeIcon icon={faGear} />}
                    />
                </SidebarMenu>
                <SidebarMenu title="Tour">
                    <SidebarItem
                        title="Tour"
                        to="/admin/tour"
                        icon={<FontAwesomeIcon icon={faGear} />}
                    />
                    <SidebarItem
                        title="Tour"
                        to="/admin/tour"
                        icon={<FontAwesomeIcon icon={faGear} />}
                    />
                </SidebarMenu>
            </div>
        </div>
    );
}

export default ManagementSidebar;
