import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Email from '../../components/Email';

class MyWork extends Component {
    state = {  }
    render() {
        return (
            <div className='work'>
            <NavBar />
            
            <Email />
            </div>
        );
    }
}

export default MyWork;