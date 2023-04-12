import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { RiUserSettingsLine } from 'react-icons/ri';
import { BsCloudSunFill } from 'react-icons/bs';

export default function Header() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to='/' as={NavLink}><BsCloudSunFill className='cloudicon' />Climate Smart</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            {/* Would make this more in the center like the GUI mockup */}
            <Nav className="me-auto">


              <Nav.Link to="/" as={NavLink}>Home</Nav.Link>

              <Nav.Link to="/weather" as={NavLink}>Weather</Nav.Link>

              <Nav.Link to="/maps-radar" as={NavLink}>Maps & Radar</Nav.Link>

              <Nav.Link to="/alerts" as={NavLink}>Alerts</Nav.Link>
            </Nav>

            {/*This would be more for the settings button */}
            <Nav>
              <Nav.Link to='/signUpUser' as={NavLink}><RiUserSettingsLine className='settingicon' /></Nav.Link>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>

  )
}
