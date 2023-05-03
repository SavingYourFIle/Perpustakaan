import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Menu Utama',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Peminjam',
        path: '/peminjam',
        icon: <FaIcons.FaHandHolding/>,
        cName: 'nav-text'
    },
    {
        title: 'Pengunjung',
        path: '/pengunjung',
        icon: <AiIcons.AiFillDatabase/>,
        cName: 'nav-text'
    },
    {
        title: 'Transaksi',
        path: '/transaksi',
        icon: <AiIcons.AiOutlineTransaction/>,
        cName: 'nav-text'
    },
]
