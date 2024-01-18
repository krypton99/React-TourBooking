import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import FilterMenu from '~/components/FilterMenu';
import Hero from '~/components/Hero';
import Partner from '~/components/Partner';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('hero-container')}>
                <Hero />
            </div>
            <Partner />
        </div>
    );
}

export default Home;
