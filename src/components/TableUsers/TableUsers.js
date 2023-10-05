import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';

import { FetchAllUsers } from '../../sevices/UserService';

function TableUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const data = await FetchAllUsers();

        if (data && data.data && data.data.data) {
            setUsers(data.data.data);
        }
    };

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.length > 0 &&
                        users.map((user, index) => {
                            return (
                                <tr key={`user ${index}`}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.first_name}</td>
                                    <td>@{user.last_name}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </Container>
    );
}

export default TableUsers;
