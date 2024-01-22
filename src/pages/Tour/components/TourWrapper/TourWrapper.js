import classNames from 'classnames/bind';
import styles from './TourWrapper.module.scss';

const cx = classNames.bind(styles);

function TourWrapper({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('grid__row')}>
                    <div className={cx('grid__column l-8 m-12 c-12')}>
                        <div className={cx('grid__row')}>
                            {children.map((tour) => {
                                return (
                                    <div
                                        className={cx(
                                            'grid__column l-6 m-6 c-6',
                                        )}
                                    >
                                        {tour}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cx('grid__column l-4 m-0 c-0')}>
                        <h3>Side filter</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourWrapper;
