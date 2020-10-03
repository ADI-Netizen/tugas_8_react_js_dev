import React from 'react';
import { Row, Col, Image, ListGroup, Jumbotron, Button, Form, Modal } from 'react-bootstrap';

function Konten() {
    const [show, setShow] = React.useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className="mt-3">
            <Row>
                <Col>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>
                            Liga 1 Indonesia
                    </ListGroup.Item>
                        <ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
                        <ListGroup.Item as="li" disabled>
                            Divisi Primera
                    </ListGroup.Item>
                        <ListGroup.Item as="li">Serie A</ListGroup.Item>
                        <ListGroup.Item as="li">Ligue 1</ListGroup.Item>
                        <ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Jumbotron>
                        <h1>Divisi Primera</h1>
                        <p>
                            Main untuk Catalunya, Gerrard Pique minta dihormati.
                    </p>
                        <p>
                            <Button variant="primary">Read more</Button>
                        </p>
                    </Jumbotron>
                </Col>
                <Col>
                    <center>
                        <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" height="50px" roundedCircle />
                        <h4>Silahkan Login</h4>
                    </center>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Masukkan email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Term & Condition" />
                        </Form.Group>
                        <Button variant="primary" onClick={handleShow}>
                            Login
                     </Button>
                    </Form>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>Anda Berhasil Login</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save Username & Password</Button>
                </Modal.Footer>
            </Modal>
        </div>


    )
}

export default Konten;