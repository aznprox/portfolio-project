import React, { Component } from 'react';
import './Home.css';
import { Row, Col } from 'react-materialize'; 

class Home extends Component {
    state = {  }
    render() {
        return (
            <div className='backGround'>
                <Row>   
                    <Col s={12} className='title'>
                        <h1>Hi, I'm Taly (Jay) Huang</h1>
                        <h3>Software Engineer</h3>                    
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;