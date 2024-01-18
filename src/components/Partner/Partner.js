import classNames from 'classnames/bind';
import styles from './Partner.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Partner() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="grid__row">
                    <div className="grid__column l-12">
                        <ul className={cx('partner-list', 'grid__row')}>
                            <li
                                className={cx(
                                    'partner-item',
                                    'grid__column',
                                    'l-2-4',
                                    'm-2-4',
                                    'c-2-4',
                                )}
                            >
                                <img
                                    className={cx('image')}
                                    alt=""
                                    src={images.airbnb}
                                />
                            </li>
                            <li
                                className={cx(
                                    'partner-item',
                                    'grid__column',
                                    'l-2-4',
                                    'm-2-4',
                                    'c-2-4',
                                )}
                            >
                                <img
                                    className={cx('image')}
                                    alt=""
                                    src={images.airbnb}
                                />
                            </li>
                            <li
                                className={cx(
                                    'partner-item',
                                    'grid__column',
                                    'l-2-4',
                                    'm-2-4',
                                    'c-2-4',
                                )}
                            >
                                <img
                                    className={cx('image')}
                                    alt=""
                                    src={images.airbnb}
                                />
                            </li>
                            <li
                                className={cx(
                                    'partner-item',
                                    'grid__column',
                                    'l-2-4',
                                    'm-2-4',
                                    'c-2-4',
                                )}
                            >
                                <img
                                    className={cx('image')}
                                    alt=""
                                    src={images.airbnb}
                                />
                            </li>
                            <li
                                className={cx(
                                    'partner-item',
                                    'grid__column',
                                    'l-2-4',
                                    'm-2-4',
                                    'c-2-4',
                                )}
                            >
                                <img
                                    className={cx('image')}
                                    alt=""
                                    src={images.airbnb}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partner;
