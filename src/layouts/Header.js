import { Grid } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { Menu } from "@mui/icons-material";

const navLinkStyles = {
	color: '#003366',
	fontFamily: 'helvetica',
	fontSize: 'medium',
	fontWeight: 100
}

function Header() {
	return (
		<Grid style={{paddingLeft: '50px', paddingRight:'50px'}}>
			<Navbar light expand='lg'>
				<Navbar.Brand href='/'>
					<img
						src="/assets/logo.svg"
						width='80px'
						height='40px'
						className="d-inline-block align-top"
						alt="Multivurse"
					/></Navbar.Brand>
				<Navbar.Toggle  style={{color: '#003366', boxShadow: 'none', backgroundColor: 'transparent', border: 'none',}} aria-controls='basic-navbar-nav'>
					<Menu style={{fontSize: '35px'}}/>
				</Navbar.Toggle>
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
					<Nav>
						<Nav.Link style={navLinkStyles} href='#company'>Company</Nav.Link>
						<Nav.Link style={navLinkStyles} href='#products'>Products</Nav.Link>
						<Nav.Link style={navLinkStyles} href='#services'>Services</Nav.Link>
						<Nav.Link style={navLinkStyles} href='#work'>Work</Nav.Link>
						<Nav.Link style={navLinkStyles} href='#contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>

			</Navbar>
		</Grid>
	)
}

export default Header