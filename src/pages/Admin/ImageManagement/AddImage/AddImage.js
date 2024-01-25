import { memo, useEffect } from 'react';

function AddImage({ setImage }) {
    useEffect(() => {
        return () => {
            setImage(undefined);
        };
    }, []);

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">
                    Link ảnh
                </label>
                <input
                    type="text"
                    name="image"
                    className="form-control"
                    onChange={(e) => {
                        console.log('Changed');
                        setImage({ image: e.target.value });
                    }}
                />
            </div>
        </div>
    );
}

export default memo(AddImage);
