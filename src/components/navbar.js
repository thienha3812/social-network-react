import React from 'react';
import { Row, Col, Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap';
import {  not } from "react-icons/md";

function NavBar() {
  return (
    <Row  >
        <Col>
            <Navbar bg="light"  fixed="top" expand="lg">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline class="ml-5">
                        <FormControl type="text" placeholder="Tìm kiếm bạn bè hoặc địa điểm" style={{width:"300px"}} className="mr-sm-2" />
                    </Form>
                    <Nav className="ml-auto mr-5">
                        <NavDropdown id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    </Row>
  )
}

export default NavBar;
