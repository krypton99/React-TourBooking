import axios from 'axios';

const tourApi = 'http://localhost:3001/api/tours/';

export const getTours = async (top = '') => {
    const response = await axios.get(tourApi + `?top=${top}`);
    return response.data;
};

export const getTourById = async (id) => {
    const response = await axios.get(tourApi + id);
    return response.data;
};

export const editTour = async (id, data) => {
    const response = await axios.put(tourApi + id, data);
    return response.data;
};

export const editTourPrice = async (id, data) => {
    const response = await axios.put(tourApi + 'price/' + id, data);
    return response.data;
};

export const createTour = async (data) => {
    const response = await axios.post(tourApi, data);
    return response.data;
};
