import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({ isShowing, onHinde, onClick, dataUser }) {
    return (
        <>
            <Modal show={isShowing} onHide={onHinde}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Job and Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa user với <br />
                    <b>email là {isShowing && dataUser.user.email}</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHinde}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            onHinde();
                            onClick(dataUser.user.id, dataUser.index);
                        }}
                    >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;
