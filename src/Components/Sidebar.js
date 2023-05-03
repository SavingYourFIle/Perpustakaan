import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { SidebarData } from './SidebarData.js';

function Sidebar(props) {
    return (
        <>
            <nav className="sidebar">
                <ul className='menu-items'>
                    <li className='title'>
                        <span>Perpustakaan</span>
                    </li>
                    
                    {SidebarData.map((item,index) =>{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

            </nav>
        </>
    );
}

export default Sidebar;