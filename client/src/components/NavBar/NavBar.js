import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './NavBar.css';
import logo from './images/logo3.png';

//{<img src={logo} alt="logo" />}

class NavBar extends Component {
    state = {}
    render() {
        return (
            <Navbar brand={<img src={logo} alt="logo" />} className='nav-bar' right>
                <NavItem className="nav-bar" href='/mywork'>MY WORK</NavItem>
                <NavItem className="nav-bar" href='/aboutme'>ABOUT ME</NavItem>
                <NavItem className="nav-bar" href='components.html'>RESUME</NavItem>
            </Navbar>
        );
    }
}

export default NavBar;