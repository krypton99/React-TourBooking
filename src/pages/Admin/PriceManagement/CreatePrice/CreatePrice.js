import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import config from '~/config';
import * as priceServices from '~/services/PriceService';

function CreatePrice({ setPriceForm, useAs = 'create', editId }) {
    const [price, setPrice] = useState(0);
    const [isPrimary, setIsPrimary] = useState(0);
    const [type, setType] = useState('');
    const [tourId, setTourId] = useState('');

    const navigate = useNavigate();

    const params = useParams();

    const handleCreate = (data) => {
        priceServices.createPrice(data).then(() => {
            navigate(
                config.routes.tourManagement.tours + `/prices/${params.id}`,
            );
        });
    };

    const handleGetPriceById = (id) => {
        priceServices.getPriceById(id).then((data) => {
            setIsPrimary(data.is_primary);
            setPrice(data.price);
            setType(data.type);
            setTourId(data.tour_id);
        });
    };

    const handleUpdate = (id, data) => {
        priceServices.editPrice(id, data).then(() => {
            navigate(config.routes.tourManagement.tours + `/prices/${tourId}`);
        });
    };

    const handleSubmit = () => {
        if (useAs === 'create') {
            handleCreate({
                price,
                is_primary: isPrimary,
                type: type,
                tour_id: params.id,
            });
        } else {
            handleUpdate(editId, {
                price,
                is_primary: isPrimary,
                type: type,
                tour_id: tourId,
            });
        }
    };

    useEffect(() => {
        if (!!setPriceForm) {
            setPriceForm({
                price,
                is_primary: isPrimary,
                type: type,
            });
        }
    }, [price, isPrimary, type]);

    useEffect(() => {
        if (useAs === 'edit') {
            handleGetPriceById(editId);
        }
        return () => {
            if (!!setPriceForm) {
                setPriceForm(undefined);
            }
        };
    }, []);

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">
                    Giá
                </label>
                <input
                    type="text"
                    name="price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="isPrimary" className="form-label">
                    isPrimary
                </label>
                <input
                    type="text"
                    name="isPrimary"
                    value={isPrimary}
                    className="form-control"
                    onChange={(e) => setIsPrimary(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="type" className="form-label">
                    Loại
                </label>
                <input
                    value={type}
                    type="text"
                    name="type"
                    className="form-control"
                    onChange={(e) => setType(e.target.value)}
                />
            </div>
            {!setPriceForm && (
                <button onClick={handleSubmit} className="btn btn-primary">
                    {useAs === 'edit' ? 'Sửa' : 'Thêm'}
                </button>
            )}
        </div>
    );
}

export default CreatePrice;
