import styles from '../../Admin.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import config from '~/config';
import { getTours } from '~/services/TourServices';

const cx = classNames.bind(styles);

function Tour() {
    const [tours, setTours] = useState([]);
    const handleApi = async () => {
        const tours = await getTours();
        console.log(tours);
        setTours(tours);
    };
    useEffect(() => {
        console.log('mounted');
        handleApi();
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tour name</th>
                    <th>description</th>
                    <th>code</th>
                    <th colSpan={2}>actions</th>
                </tr>
            </thead>
            <tbody>
                {tours.map((tour) => {
                    return (
                        <tr key={tour.id}>
                            <td>{tour.id}</td>
                            <td>{tour.name}</td>
                            <td>{tour.description}</td>
                            <td>{tour.code_tour}</td>
                            <td>
                                <Link to={'/admin/tour/' + tour.id}>Sửa</Link>
                                <Link>Xóa</Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default Tour;
