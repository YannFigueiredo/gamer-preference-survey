import axios from 'axios';

const apiRecords = axios.create({
    baseURL: 'http://gamerpreferencesurvey.herokuapp.com'
});

export default apiRecords;