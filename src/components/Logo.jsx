import React from 'react'
import {logo} from '../assets/index'

function Logo({width = '100px'}){
    return (
        <div style={{ width }} className='sticky'>
            <img 
                src={logo} 
                alt="Logo" 
                className="w-full h-auto object-contain"
            />
        </div>

    )
}

export default Logo