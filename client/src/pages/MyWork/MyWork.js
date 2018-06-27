import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Email from '../../components/Email';
import Projects from '../../components/Projects';

class MyWork extends Component {
    state = {  }
    render() {
        return (
            <div className='work'>
            <NavBar />
            <Projects />
            <Email />
            </div>
        );
    }
}

export default MyWork;