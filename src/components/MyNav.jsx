import { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class MyNav extends Component {
  render() {
    return (
      <Navbar
        className="w-100 fixed-top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src="/netflix_logo.png" alt="LOGO" width="100px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link active href="#Tv Shows">
                Tv Shows
              </Nav.Link>
              <Nav.Link href="#Movies">Movies</Nav.Link>
              <Nav.Link href="#RecentlyAdded">Recently Added</Nav.Link>
              <Nav.Link href="#MyList">My List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="30"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Nav.Link>
              <Nav.Link>KIDS</Nav.Link>
              <Nav.Link>
                <div className="d-flex align-content-center">
                  <img
                    id="avatar"
                    width="35px"
                    src="/avatar.png"
                    alt="avatar"
                  />
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default MyNav;
