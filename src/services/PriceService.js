import axios from 'axios';

const priceApi = 'http://localhost:3001/api/prices/';

export const getPrices = async (tourId = '', isPrimary = '') => {
    const response = await axios.get(
        priceApi + `?tourId=${tourId}&isPrimary=${isPrimary}`,
    );
    return response.data;
};

export const getPriceById = async (id) => {
    const response = await axios.get(priceApi + id);
    return response.data;
};

export const editPrice = async (id, data) => {
    const response = await axios.put(priceApi + id, data);
    return response.data;
};

export const createPrice = async (data) => {
    const response = await axios.put(priceApi, data);
    return response.data;
};
