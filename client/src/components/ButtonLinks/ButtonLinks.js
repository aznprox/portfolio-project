import React from 'react';
import './ButtonLinks.css'
import { Button } from 'react-materialize';

const ButtonLinks = (props) => {
    return (
        <Button className='btn-link' waves='light' node='a' href='www.google.com'>
            {props.name}
        </Button>
    );
}

export default ButtonLinks;