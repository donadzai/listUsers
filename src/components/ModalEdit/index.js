import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComp({ isShowing, onHinde, onClick, dataUser }) {
    const [job, setJob] = useState('');
    const [name, setName] = useState('');
    useEffect(() => {
        setName(dataUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onHinde])

    return (
        <>
            <Modal show={isShowing} onHide={onHinde}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Job and Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="email"
                                placeholder="VD : Kiều Duy Đoàn"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Jobs</Form.Label>
                            <Form.Control
                                value={job}
                                onChange={(e) => setJob(e.target.value)}
                                type="email"
                                placeholder="VD : Tân sinh viên"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHinde}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            onHinde();
                            onClick(name, job);
                        }}
                    >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComp;

