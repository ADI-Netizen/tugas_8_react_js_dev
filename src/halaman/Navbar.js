import React from 'react';
import { Row, Col, Dropdown, DropdownButton, Image } from 'react-bootstrap';

function NaviBar() {
    return (
        <div style={{ backgroundColor: 'black', marginTop: '5px' }}>
            <Row>
                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
                        <Dropdown.Item href="#/action-1">Bahasa Indonesia</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">日本</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col md={8}></Col>
                <Col>
                    <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" height="50px" roundedCircle />
                    <p className="text-light">Alan Saputra</p>
                </Col>
            </Row>
        </div >
    );
}

export default NaviBar;