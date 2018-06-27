import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './NavBar.css';
import logo from './images/logo2.png';


class NavBar extends Component {
    state = {}
    render() {
        return (
            <Navbar brand={<img src={logo} alt="logo" />} className='nav-bar' right>
                <NavItem className="nav-bar" href='/mywork'>My Work</NavItem>
                <NavItem className="nav-bar" href='/aboutme'>About Me</NavItem>
                <NavItem className="nav-bar" href='components.html'>Resume</NavItem>
            </Navbar>
        );
    }
}

export default NavBar;