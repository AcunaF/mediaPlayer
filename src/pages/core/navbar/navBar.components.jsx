import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import backgroundImage from "../../../assets/images/multitud-de-conciertos-de-música-rock.jpg";

import "./navBar.styles.scss";

export const NavScroll = () => {
  return (
    <div className="nav-container">
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
        style={{
          backgroundImage: `url(${backgroundImage})
            height: 100vh;
            width: 10%;
            `,
        }}
      >
        <Container>
          <Navbar.Brand>
            <h1 className="tittle">TiendaTicket</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ fontSize: "2.5rem" }}
          />{" "}
          <Navbar.Collapse
            style={{ height: " 100px   fontSize: +2.5rem" }}
            id="navbarScroll"
          >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
