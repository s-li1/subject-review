
import React from 'react';
import { BiBookAlt, BiGridAlt, BiLaptop, BiBriefcase, BiCog} from 'react-icons/bi';

export const SideBarData = [
    {
        title:'Home',
        path: '/',
        icon: <BiGridAlt className="nav-icon"/>,
        name: 'home'
    },
    {
        title: 'I.T',
        path: '/IT',
        icon: <BiLaptop className="nav-icon"/>,
        name: 'Information Technology'
    },
    {
        title: 'Business',
        path: '/business',
        icon: <BiBriefcase className="nav-icon"/>,
        name: 'Business'
    },
    {
        title: 'Engineering',
        path: '/engineering',
        icon: <BiCog className="nav-icon"/>,
        name: 'Engineering'
    }
]