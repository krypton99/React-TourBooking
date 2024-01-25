import { useEffect, useState } from 'react';
import styles from '../../Admin.module.scss';
import classNames from 'classnames/bind';
import * as tourServices from '~/services/TourServices';
import { useNavigate, useParams } from 'react-router-dom';
import config from '~/config';

function EditTour() {
    const [codeTour, setCodeTour] = useState('');
    const [name, setName] = useState('');
    const [avatarTour, setAvatarTour] = useState('');
    const [discountPercent, setDiscountPercent] = useState('');
    const [startPlace, setStartPlace] = useState('');
    const [endPlace, setEndPlace] = useState('');
    const [time, setTime] = useState('');
    const [national, setNational] = useState('');
    const [province, setProvince] = useState('');
    const [startTime, setStartTime] = useState('');
    const [description, setDescription] = useState('');

    const params = useParams();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        const tour = {
            name: name,
            code_tour: codeTour,
            avatar_tour: avatarTour,
            discount_percent: parseInt(discountPercent),
            start_place: startPlace,
            end_place: endPlace,
            time: time,
            national: national,
            province: province,
            start_time: new Date(startTime).toISOString(),
            description: description,
        };
        tourServices.editTour(params.id, tour).then(() => {
            navigate(config.routes.tourManagement.tours);
        });
    };

    useEffect(() => {
        const handleApi = async () => {
            const tour = await tourServices.getTourById(params.id);
            setCodeTour(tour.code_tour);
            setName(tour.name);
            setAvatarTour(tour.avatar_tour);
            setDiscountPercent(tour.discount_percent);
            setStartPlace(tour.start_place);
            setEndPlace(tour.end_place);
            setTime(tour.time);
            setNational(tour.national);
            setProvince(tour.province);
            setStartTime(tour.start_time);
            setDescription(tour.description);
        };
        handleApi();
    }, []);

    return (
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Tên Tour
                </label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="avatar_tour" className="form-label">
                    Link
                </label>
                <input
                    type="text"
                    name="avatar_tour"
                    value={avatarTour}
                    className="form-control"
                    onChange={(e) => setAvatarTour(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="code_tour" className="form-label">
                    Mã Code
                </label>
                <input
                    value={codeTour}
                    type="text"
                    name="code_tour"
                    className="form-control"
                    onChange={(e) => setCodeTour(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="discount_percent" className="form-label">
                    % Giảm giá
                </label>
                <input
                    type="text"
                    value={discountPercent}
                    name="discount_percent"
                    className="form-control"
                    onChange={(e) => setDiscountPercent(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="start_place" className="form-label">
                    Điểm bắt đầu
                </label>
                <input
                    type="text"
                    value={startPlace}
                    name="start_place"
                    className="form-control"
                    onChange={(e) => setStartPlace(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="end_place" className="form-label">
                    Điểm kết thúc
                </label>
                <input
                    type="text"
                    value={endPlace}
                    name="end_place"
                    className="form-control"
                    onChange={(e) => setEndPlace(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="time" className="form-label">
                    Số ngày
                </label>
                <input
                    type="number"
                    value={time}
                    name="time"
                    className="form-control"
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="national" className="form-label">
                    Quốc gia
                </label>
                <input
                    type="text"
                    value={national}
                    name="national"
                    className="form-control"
                    onChange={(e) => setNational(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="province" className="form-label">
                    Tỉnh thành
                </label>
                <input
                    type="text"
                    value={province}
                    name="province"
                    className="form-control"
                    onChange={(e) => setProvince(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="start_time" className="form-label">
                    Thời gian bắt đầu
                </label>
                <input
                    type="date"
                    value={startTime}
                    name="start_time"
                    className="form-control"
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Mô tả
                </label>
                <textarea
                    value={description}
                    name="description"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}

export default EditTour;
