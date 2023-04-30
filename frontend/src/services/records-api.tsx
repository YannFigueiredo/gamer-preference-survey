import axios from 'axios';

const recordsApi = axios.create({
    baseURL: 'https://gamer-preference-survey.up.railway.app'
});

export default recordsApi;
