import axios from "axios";


let otions = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
};
let axiosInstance = axios.create(otions);
let getUsers = axiosInstance('/users');
let getUser = (id) => axiosInstance('/users/' + id)

export {getUsers, getUser};