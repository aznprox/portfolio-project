import React from 'react';
import { Button } from 'react-materialize';
import './Email.css'

const bottomIcon = () => {
    return (
        <Button floating fab='vertical' icon='dehaze' className='black media' medium style={{ bottom: '30px', right: '24px' }}>
            <Button floating icon='' node='a' href='mailto:talyjayhuang@gmail.com' className='black far fa-envelope fa-2x' />
            <Button floating icon='' node='a' href='https://www.linkedin.com/in/taly-huang/' className='black fab fa-linkedin fa-2x'/>
            <Button floating icon='' node='a' href='https://github.com/aznprox' className='black fab fa-github fa-2x'/>
        </Button>  
    )
}

export default bottomIcon;