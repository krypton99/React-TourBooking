import { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import * as priceServices from '~/services/PriceService';

function Price() {
    const [prices, setPrices] = useState([]);
    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setDeleteId(e.target.dataset.id);
        setShow(true);
    };

    const handleDelete = () => {
        priceServices.deletePrice(deleteId).then(() => {
            setIsDeleted(true);
        });
        setShow(false);
    };

    const params = useParams();

    useEffect(() => {
        setIsDeleted(false);
        const handleApi = async () => {
            const prices = await priceServices.getPrices(params.id);
            setPrices(prices);
        };
        handleApi();
    }, [isDeleted]);

    return (
        <>
            <Link
                to={'/admin/tour/prices/create/1'}
                className="btn btn-primary"
            >
                Thêm giá
            </Link>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>isPrimary</th>
                        <th>Giá</th>
                        <th>Loại</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prices.map((price) => {
                        return (
                            <tr key={price.id}>
                                <td>{price.id}</td>
                                <td>{price.is_primary}</td>
                                <td>{price.price}</td>
                                <td>{price.type}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary "
                                        to={
                                            '/admin/tour/prices/edit/' +
                                            price.id
                                        }
                                    >
                                        Sửa
                                    </Link>
                                    <Button
                                        variant="primary"
                                        onClick={handleShow}
                                        data-id={price.id}
                                    >
                                        Xóa
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa trường giá?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc muốn xóa trường này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Đồng ý
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Price;
