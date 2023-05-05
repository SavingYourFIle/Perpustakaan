import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Button(props) {
    console.log(props);
    return (
        <>
            <div className='nav-text' >
                <Link to={props.path}>
                {props.icon}
                <span>{props.title}</span>
                </Link>
            </div>
        
        </>
    );
}

export default Button;