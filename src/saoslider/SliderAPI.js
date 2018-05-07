import axios from 'axios';

const apiSlides = process.env.SAOSLIDER_API_URL;

export const getAllSlides = () => axios.get(`${apiSlides}/api/v1/slides`);

// export const createRecord = (body) => axios.post(`${api}/api/v1/records`, body);

// export const updateRecord = (id, body) => axios.put(`${api}/api/v1/records/${id}`, body);

// export const removeRecord = (id) => axios.delete(`${api}/api/v1/records/${id}`);