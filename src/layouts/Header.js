import { Grid, Avatar } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { Menu } from "@mui/icons-material";
import { grey } from '@mui/material/colors';

const navLinkStyles = {
  color: "#003366",
  fontFamily: "helvetica",
  fontSize: "medium",
  fontWeight: 100,
};


function Header() {
  return (
    <Grid style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <Navbar light expand="lg">
        <Navbar.Brand href="/">
          <Grid container fluid>
            <Avatar sx={{ bgcolor: grey[900], height: 50, width: 150 }} variant="rounded">
              Jonathan D.
            </Avatar>
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
