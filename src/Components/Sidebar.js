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

                <p className='title'> <IoIcons.IoIosBook/>  <span>Perpustakaan </span> </p>
                <hr></hr>
                <ul className='menu-items'>
                    {SidebarData.map((item,index) =>{
                        return (
                            <Link to={item.path} style={{ textDecoration: 'none' }}>
                                <Button cName={'Btn-dark'} icon={item.icon} title={item.title} style={{width: '100%'}}/>
                            </Link>
                            
                        );
                    })}
                    
                </ul>
                <hr></hr>
            </nav>
            
        </>
    );
}

export default Sidebar;