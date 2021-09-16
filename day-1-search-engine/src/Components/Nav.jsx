import React from "react";
import { Container, Navbar } from "react-bootstrap";
export default function Nav() {
  return (
    <div>
      <Container>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#">Job search</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}
