import React, { Component } from 'react';
import './Projects.css';
import API from '../../utils/API.js';
import { Row, Col, Parallax } from 'react-materialize';

class Projects extends Component {
    state = {
        projects: []
    }

  // When the component mounts, load all projects and save them to this.state.projects    
    componentDidMount() {
        console.log('GrandChild did mount.');
        this.loadProjects();
      }

      loadProjects = () =>{
          API.getProjects()
          .then( res =>
            this.setState({projects: res.data})
        )
        .catch(err => console.log(err)) 
      }
      
    render() {
        return (
            <div className='container'>
            <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
                <Row>
                    <Col s={12} className='grid-example'>
                        <Row>
                            <Col s={3} className='description-bar'>
                                <h4>Event</h4>
                                <p>Hackathon</p>
                            </Col>
                            <Col s={3} className='description-bar'>
                                <h4>Roles</h4>
                                <p>Full Stack Developer</p>
                            </Col>
                            <Col s={3} className='description-bar'>
                                <h4>Tools</h4>
                                <p>React/Bootstrap/Node</p>
                            </Col>
                            <Col s={3} className='description-bar'>
                                <h4>Timeframe</h4>
                                <p>3 Weeks</p>
                            </Col>
                        </Row>
                        <Row>
                        <Col s={12} className='grid-example'>
                        description
                        </Col>
                        </Row>
                        <Row>
                            <Col s={12} className='project-url'>
                                <p>www.github.com</p>
                                <p>www.heroku.com</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Projects;