import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';
import lumbridge_castle_tavern from '../assets/lumbridge_castle_tavern.png';
import '../styles/component-AppNavbar.css';
import { Link } from 'react-router-dom';

function AppNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar id={"navbar"}
                dark
                expand="lg"
                {...args}>
                <NavbarText> <img id={"lumbridge_castle_tavern_logo"} src={lumbridge_castle_tavern} alt="Lumbridge Castle Tavern logo"/> </NavbarText>
                <NavbarBrand id={"navbarBrand"}>Lumbridge Castle Tavern</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav id={"navItemList"} className="me-auto" navbar>
                        <NavItem>
                            <NavLink className='navLink' tag={Link} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='navLink' tag={Link} to="/menu/">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='navLink' tag={Link} to="/hiring/">Hiring</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default AppNavbar;