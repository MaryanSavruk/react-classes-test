import axios from "axios";


let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
};
let axiosInstance = axios.create(options);
const getusers = () => axiosInstance('/users');
const getUser = (id) => axiosInstance('/users/' + id);

export {getusers, getUser};