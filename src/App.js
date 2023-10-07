import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import TableUsers from './components/TableUsers/TableUsers';
import ModalComp from './components/Modal';
import { useState } from 'react';

function App() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };
    return (
        <div className="app">
            <Header />
            <Container>
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
                <ModalComp isShowing={showModal} onHinde={handleClose} />
                <TableUsers />
            </Container>
        </div>
    );
}

export default App;
