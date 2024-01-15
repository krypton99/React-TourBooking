import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import FilterMenu from '~/components/FilterMenu';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <FilterMenu />
        </div>
    );
}

export default Home;
