import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import * as priceServices from '~/services/PriceService';

function Price() {
    const [prices, setPrices] = useState([]);

    const params = useParams();

    useEffect(() => {
        const handleApi = async () => {
            const tours = await priceServices.getPrices(params.id);
            setPrices(tours);
        };
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
                {prices.map((price) => {
                    return (
                        <tr>
                            <td>{price.id}</td>
                            <td>{price.is_primary}</td>
                            <td>{price.price}</td>
                            <td>{price.tour_id}</td>
                            <td>
                                <Link to={'/admin/price/' + price.id}>Sửa</Link>
                                <Link>Xóa</Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default Price;
