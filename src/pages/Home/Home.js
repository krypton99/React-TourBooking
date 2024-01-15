import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import FilterMenu from '~/components/FilterMenu';
import Hero from '~/components/Hero';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Hero />
        </div>
    );
}

export default Home;
