import axios from 'axios';
const appMode = 'PRODUCTION';

export const getUrl = () => {

    let API;

    if( appMode === 'PRODUCTION' ){
        API = 'http://localhost:3002/api'
    } else {
        API = 'http://localhost:3002/api'
    }
    
    return { API }
}

const setAPIHeadersConfiguration = (token) => {

    API_URL.defaults.headers.common['Authorization'] = `Basic ${token}`;
    API_URL.defaults.headers.common['Content-Type'] = 'application/json';
    // API_URL.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // API_URL.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, X-Requested-With, Content-Type, Accept';
    // API_URL.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    // API_URL.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    // API_URL.defaults.headers.common['Accept'] = '*/*';
}

const API_URL = axios.create({
    baseURL: getUrl().API
});

export default { API_URL, setAPIHeadersConfiguration };