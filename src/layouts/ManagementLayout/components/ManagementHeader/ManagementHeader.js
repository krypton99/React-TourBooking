import styles from './ManagementHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ManagementHeader() {
    return <div className={cx('wrapper')}>Header</div>;
}

export default ManagementHeader;
