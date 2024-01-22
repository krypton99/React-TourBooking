import axios from 'axios';

const tourApi = 'http://localhost:3001/api/tours/';

export const getTours = async (top = '') => {
    const response = await axios.get(tourApi + `?top=${top}`);
    return response.data;
};
