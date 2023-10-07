import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComp({ isShowing, onHinde }) {
    const [job, setJob] = useState('');
    const [name, setName] = useState('');

    return (
        <>
            <Modal show={isShowing} onHide={onHinde}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Job and Member</Modal.Title>
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
                            console.log({
                                name,
                                job,
                            });
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComp;
