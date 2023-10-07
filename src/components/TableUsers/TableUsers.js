import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { FetchAllUsers } from '../../sevices';

function TableUsers() {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getUsers(currentPage);
    }, [currentPage]);

    const getUsers = async (page) => {
        const data = await FetchAllUsers(page);

        if (data && data.data) {
            setTotalPages(data.total_pages);
            setUsers(data.data);
        }
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    }

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

            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </Container>
    );
}

export default TableUsers;
