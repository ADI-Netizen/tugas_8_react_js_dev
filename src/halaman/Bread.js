import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';

function Bread() {
    return (
        <div>
            <Row className="flex-row-reverse mr-1">
                <Col md={4} >
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
                        <Breadcrumb.Item active>Bola</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </div >
    );
}

export default Bread;