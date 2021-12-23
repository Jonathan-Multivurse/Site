import { Grid } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { Menu } from "@mui/icons-material";

const navLinkStyles = {
  color: "#222222",
  fontFamily: "helvetica",
  fontSize: "medium",
  fontWeight: 100,
};

const namecontainer = {
  height: 50,
  width: 200,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'transparent linear-gradient(180deg, #000000 0%, #3B3B3B 100%) 0% 0% no-repeat padding-box',
  color: "#ffffff",
  fontFamily: "helvetica",
  fontSize: "medium",
  fontSize: 18,
  fontWeight: 500,
  borderRadius: 50
};


function Header() {
  return (
    <Grid style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <Navbar light expand="lg">
        <Navbar.Brand href="/">
          <Grid container fluid>
            <div style={namecontainer} variant="rounded">
              Jonathan Daniels
            </div>
          </Grid>
        </Navbar.Brand>
        <Navbar.Toggle
          style={{
            color: "#003366",
            boxShadow: "none",
            backgroundColor: "transparent",
            border: "none",
          }}
          aria-controls="basic-navbar-nav"
        >
          <Menu style={{ fontSize: "35px" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link style={navLinkStyles} href="#craft">
              Craft
            </Nav.Link>
            <Nav.Link style={navLinkStyles} href="#expertise">
              Expertise
            </Nav.Link>
            <Nav.Link style={navLinkStyles} href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link style={navLinkStyles} href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link style={navLinkStyles} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Grid>
  );
}

export default Header;
