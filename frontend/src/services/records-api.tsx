import axios from 'axios';

const recordsApi = axios.create({
    baseURL: 'https://gamerpreferencesurvey.herokuapp.com'
});

export default recordsApi;