import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ModalComp from '../Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FetchAllUsers, editUser, postUser, deleteUser } from '../../sevices';
import ModalEdit from '../ModalEdit';
import ModalDelete from '../ModalDelete';

function TableUsers() {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [indexUser, setIndexUser] = useState();

    const [dataUserEdit, setDataUserEdit] = useState();
    const [dataDelete, setDataDelete] = useState({});

    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        setShowModalEdit(false);
        setShowModalDelete(false);
    };

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
    };

    const handleClick = async (name, job) => {
        const data = await postUser(name, job);

        if (data) {
            setUsers([data, ...users]);
        }
    };

    const handleEdit = async (name, job) => {
        const dataUpdate = await editUser(name, job);

        let dataUser = [...users];

        dataUser.splice(indexUser, 1, dataUpdate);

        setUsers(dataUser);
    };

    const handleDelete = async (user, index) => {
        const dataDelete = await deleteUser(user.id);

        if (+dataDelete.status === 204) {
            let dataUser = [...users];
            dataUser.splice(index, 1);
            setUsers(dataUser);
            toast.success(
                `Bạn đã xóa thành công user này`,
                {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                },
            );
        }
    };

    const getIndexUser = (index) => {
        setIndexUser(index);
    };

    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="my-3">List User:</div>
                <button
                    onClick={() => setShowModal(true)}
                    type="button"
                    className="btn btn-primary"
                >
                    Add New User
                </button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
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
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            onClick={() => {
                                                getIndexUser(index);
                                                setDataUserEdit(
                                                    user.first_name,
                                                );
                                                setShowModalEdit(true);
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => {
                                                setShowModalDelete(true);
                                                setDataDelete({
                                                    user: user,
                                                    index: index,
                                                });
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
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
            <ModalComp
                onClick={handleClick}
                isShowing={showModal}
                onHinde={handleClose}
            />
            <ModalEdit
                dataUser={dataUserEdit}
                onClick={handleEdit}
                isShowing={showModalEdit}
                onHinde={handleClose}
            />
            <ModalDelete
                dataUser={dataDelete}
                onClick={handleDelete}
                isShowing={showModalDelete}
                onHinde={handleClose}
            />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default TableUsers;
