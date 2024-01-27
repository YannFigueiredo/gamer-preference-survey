import axios from 'axios';

const recordsApi = axios.create({
    baseURL: 'https://gamer-preference-survey-api.onrender.com'
});

export default recordsApi;
