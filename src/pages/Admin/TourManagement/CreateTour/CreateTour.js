import styles from '../../Admin.module.scss';
import classNames from 'classnames/bind';
import Table from 'react-bootstrap/Table';

const cx = classNames.bind(styles);

function Tour() {
    return (
        <form method="POST" action="http://localhost:3001/api/tours/">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Tên Tour
                </label>
                <input type="text" name="name" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="avatar_tour" className="form-label">
                    Link
                </label>
                <input
                    type="text"
                    name="avatar_tour"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="code_tour" className="form-label">
                    Mã Code
                </label>
                <input type="text" name="code_tour" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="discount_percent" className="form-label">
                    % Giảm giá
                </label>
                <input
                    type="text"
                    name="discount_percent"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="start_place" className="form-label">
                    Điểm bắt đầu
                </label>
                <input
                    type="text"
                    name="start_place"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="end_place" className="form-label">
                    Điểm kết thúc
                </label>
                <input type="text" name="end_place" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="time" className="form-label">
                    Số ngày
                </label>
                <input type="number" name="time" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="national" className="form-label">
                    Quốc gia
                </label>
                <input type="text" name="national" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="province" className="form-label">
                    Tỉnh thành
                </label>
                <input type="text" name="province" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="start_time" className="form-label">
                    Thời gian bắt đầu
                </label>
                <input type="date" name="start_time" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Mô tả
                </label>
                <textarea
                    name="description"
                    className="form-control"
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}

export default Tour;
