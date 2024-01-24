import axios from 'axios';

const recordsApi = axios.create({
    baseURL: 'http://localhost:3000'
});

export default recordsApi;
