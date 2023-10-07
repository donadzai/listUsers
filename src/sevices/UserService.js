import instance from './CustomAxios'

export const FetchAllUsers = (page) => {
    return instance.get(`users?page=${page}`);
}