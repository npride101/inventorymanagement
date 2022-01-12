import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom'
function AppNavbar() {
    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    Inventory Management
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink to = "/edit" >
                                Edit Inventory
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to = "/view">
                                View Inventory
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;
