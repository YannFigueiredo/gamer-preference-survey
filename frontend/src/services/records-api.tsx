import axios from 'axios';

const recordsApi = axios.create({
    baseURL: 'http://gamerpreferencesurvey.herokuapp.com'
});

export default recordsApi;