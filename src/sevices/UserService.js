import instance from './CustomAxios';

export const FetchAllUsers = (page) => {
    return instance.get(`users?page=${page}`);
};

export const postUser = (name, job) => {
    return instance.post(`users`, { 'first_name' : name, job });
};

export const editUser = (name, job) => {
    return instance.put(`users/2`, { 'first_name' : name, job });
};

export const deleteUser = (id) => {
    return instance.delete(`users/${id}`);
};
