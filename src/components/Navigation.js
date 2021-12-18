import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Style.css';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="sm">
			<Navbar.Brand href="/">
			<button class="button-53" role="button">SketchX Art Pannel</button>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/about">
					
					<button class="button-53" role="button">About Me</button>
						</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation;