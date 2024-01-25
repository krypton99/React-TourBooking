import { useEffect, useState } from 'react';

function CreatePrice({ setPriceForm }) {
    const [price, setPrice] = useState(0);
    const [isPrimary, setIsPrimary] = useState(0);
    const [type, setType] = useState('');

    useEffect(() => {
        setPriceForm({
            price,
            isPrimary,
            type,
        });
    }, [price, isPrimary, type]);

    useEffect(() => {
        return () => {
            setPriceForm(undefined);
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
        </div>
    );
}

export default CreatePrice;
