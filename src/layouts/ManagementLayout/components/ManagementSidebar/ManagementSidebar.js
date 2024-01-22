import classNames from 'classnames/bind';
import styles from './ManagementSidebar.module.scss';
import SidebarMenu from './SidebarMenu';
import SidebarItem from './SidebarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

const cx = classNames.bind(styles);

function ManagementSidebar() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('sidebar-title')}>Admin</h3>
            <div className={cx('content')}>
                <SidebarMenu title="Tour">
                    <SidebarItem
                        title="Tour"
                        to={config.routes.tourManagement.tours}
                        icon={<FontAwesomeIcon icon={faGear} />}
                    />
                    <SidebarItem
                        title="Create Tour"
                        to={config.routes.tourManagement.createTour}
                        icon={<FontAwesomeIcon icon={faPlus} />}
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
