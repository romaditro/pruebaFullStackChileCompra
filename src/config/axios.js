import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://api.covid19api.com/summary'
});



export default clienteAxios;