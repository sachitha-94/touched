import React from "react";
// import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  // DropdownMenu,
  // DropdownItem,
  // DropdownToggle,
  // UncontrolledDropdown,
  // Media,
  // NavbarBrand,
  Navbar,
  NavItem,
  // NavLink,
  Nav,
  Container,
  Row,
  Col,
  // UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              {/* <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/argon-react-white.png")}
                />
              </NavbarBrand> */}
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    {/* <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/touched/logo_final.png")}
                        />
                      </Link>
                    </Col> */}
                    <Col className="collapse-close" xs="12">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
               
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                  <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      // href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                      style={{ backgroundColor: "Transparent",borderColor: "cornflowerblue", color: "azure", opacity:"0.6"}}
                    >
                      <span className="nav-link-inner--text ml-1">
                        How it works
                      </span>
                    </Button>
                  </NavItem>
                  <NavItem>
                  <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      // href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                      style={{ backgroundColor: "Transparent",borderColor: "cornflowerblue", color: "azure"}}
                    >
                      <span className="nav-link-inner--text ml-1">
                        touch points
                      </span>
                    </Button>
                  </NavItem>
                  <NavItem>
                  <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      // href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                      style={{ backgroundColor: "Transparent",borderColor: "cornflowerblue", color: "azure"}}
                    >
                      <span className="nav-link-inner--text ml-1">
                        contact us
                      </span>
                    </Button>
                  </NavItem>
                  <NavItem>
                  <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      // href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                      style={{ backgroundColor: "#ED71FF",borderColor: "#ED71FF", color: "azure"}}
                    >
                      <span className="nav-link-inner--text ml-1">
                        get theme
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
