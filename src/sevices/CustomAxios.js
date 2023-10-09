import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
});

instance.interceptors.response.use(
    function (response) {
        return response.data ? response.data : {'status' : response.status};
    },
    function (error) {
        return error;
    },
);

export default instance;
