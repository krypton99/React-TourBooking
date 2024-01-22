import styles from './ManagementLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ManagementHeader from './components/ManagementHeader';
import ManagementSidebar from './components/ManagementSidebar';

const cx = classNames.bind(styles);

function ManagementLayout({ children }) {
    console.log(children);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <ManagementSidebar />
                <div className={cx('content')}>
                    <ManagementHeader />
                    {children}
                </div>
            </div>
        </div>
    );
}

ManagementLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ManagementLayout;
