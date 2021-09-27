import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item as="li">
            <Nav.Link href="/home">LinkedIn</Nav.Link>
          </Nav.Item> */}
          <Nav.Item as="li">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
