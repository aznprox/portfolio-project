import React, { Component } from 'react';
import './Project.css';
import API from '../../utils/API.js';

class Projects extends Component {
    state = {
        projects: []
    }

  // When the component mounts, load all projects and save them to this.state.projects    
    componentDidMount() {
        console.log('GrandChild did mount.');
        this.loadProjects();
      }

      load
      
    render() {
        return (
            <Row>
                <Col s={3} className='grid-example'>1</Col>
                <Col s={9} className='grid-example'>2</Col>
            </Row>
        );
    }
}

export default Projects;