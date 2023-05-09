import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

function Button(props) {
    console.log(props);
    return (
        <>
            <div className={props.cName} style={props.style} >
                {props.icon}
                <span>{props.title}</span>

            </div>
        
        </>
    );
}

export default Button;