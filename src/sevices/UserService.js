import instance from './CustomAxios'

export const FetchAllUsers = () => {
    return instance.get('users?page=1');
}