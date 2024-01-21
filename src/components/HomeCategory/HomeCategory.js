import classNames from 'classnames/bind';
import styles from './HomeCategory.module.scss';

const cx = classNames.bind(styles);

function HomeCategory() {
    return (
        <div className={cx('wrapper', 'grid wide')}>
            <div className={cx('grid__row')}>
                <div className={cx('grid__column l-12')}>
                    <h3 className={cx('label')}>CATEGORY</h3>
                    <h3 className={cx('title')}>
                        CHÚNG TÔI MANG LẠI DỊCH VỤ TỐT NHẤT
                    </h3>
                </div>
                <a
                    href="/"
                    className={cx(
                        'home-category-link',
                        'grid__column l-3 m-6 c-12',
                    )}
                >
                    <div className={cx('item')}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5998/5998991.png"
                            alt=""
                            className={cx('home-category-img')}
                        />
                        <h3 className={cx('home-category-label')}>
                            Guided Tours
                        </h3>
                        <span className={cx('home-category-desc')}>
                            sunt qui repellat saepe quo velit aperiam id aliquam
                            placeat.
                        </span>
                    </div>
                </a>
                <a
                    href="/"
                    className={cx(
                        'home-category-link',
                        'grid__column l-3 m-6 c-12',
                    )}
                >
                    <div className={cx('item')}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5998/5998991.png"
                            alt=""
                            className={cx('home-category-img')}
                        />
                        <h3 className={cx('home-category-label')}>
                            Guided Tours
                        </h3>
                        <span className={cx('home-category-desc')}>
                            sunt qui repellat saepe quo velit aperiam id aliquam
                            placeat.
                        </span>
                    </div>
                </a>
                <a
                    href="/"
                    className={cx(
                        'home-category-link',
                        'grid__column l-3 m-6 c-12',
                    )}
                >
                    <div className={cx('item')}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5998/5998991.png"
                            alt=""
                            className={cx('home-category-img')}
                        />
                        <h3 className={cx('home-category-label')}>
                            Guided Tours
                        </h3>
                        <span className={cx('home-category-desc')}>
                            sunt qui repellat saepe quo velit aperiam id aliquam
                            placeat.
                        </span>
                    </div>
                </a>
                <a
                    href="/"
                    className={cx(
                        'home-category-link',
                        'grid__column l-3 m-6 c-12',
                    )}
                >
                    <div className={cx('item')}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5998/5998991.png"
                            alt=""
                            className={cx('home-category-img')}
                        />
                        <h3 className={cx('home-category-label')}>
                            Guided Tours
                        </h3>
                        <span className={cx('home-category-desc')}>
                            sunt qui repellat saepe quo velit aperiam id aliquam
                            placeat.
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default HomeCategory;
