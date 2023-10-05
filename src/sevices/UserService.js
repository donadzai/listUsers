import axios from "axios";

export const FetchAllUsers = () => {
    return axios.get('https://reqres.in/api/users?page=1')
}