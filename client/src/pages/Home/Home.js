import React, { Component } from 'react';
import './Home.css';
import { Row, Col } from 'react-materialize';
import ButtonLinks from '../../components/ButtonLinks';
import Email from '../../components/Email';

class Home extends Component {
    state = {}
    render() {
        return (
            <div className='back-ground'>
                <Row>
                    <Col s={12} className='title'>
                        <h1>Hi, I'm Taly (Jay) Huang</h1>
                        <h3>Software Engineer</h3>
                        <div className='buttons'>
                            <ButtonLinks name='My Work' />
                            <ButtonLinks name='About Me' />
                        </div>
                    </Col>
                </Row>
                <Email/>
            </div>

        );
    }
}

export default Home;