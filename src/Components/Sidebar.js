import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { SidebarData } from './SidebarData.js';
import Button from './Button.js';

function Sidebar(props) {
    
    return (
        <>
            <nav className="sidebar">
                <ul className='menu-items'>
                    <p className='title'>
                            Perpustakaan
                    </p>
                    
                    {SidebarData.map((item,index) =>{
                        return (
                            <Button icon={item.icon} path={item.path} title={item.title}  />

                            /*<li key={index} className={item.cName}>
                                <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                                </Link>
                            </li>*/
                        );
                    })}
                </ul>

            </nav>
        </>
    );
}

export default Sidebar;