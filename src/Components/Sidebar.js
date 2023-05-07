import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { SidebarData } from './SidebarData.js';
import * as IoIcons from 'react-icons/io';
import Button from './Button.js';

function Sidebar(props) {
    
    return (
        <>
        
            <nav className="sidebar">

                <p className='title'> <IoIcons.IoIosBook/>  <span>Perpustakaangit </span> </p>
                <hr></hr>
                <ul className='menu-items'>
                    {SidebarData.map((item,index) =>{
                        return (
                            <Button icon={item.icon} path={item.path} title={item.title}  />
                        );
                    })}
                    
                </ul>
                <hr></hr>
            </nav>
            
        </>
    );
}

export default Sidebar;