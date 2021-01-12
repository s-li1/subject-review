
import React from 'react';
import {BiGridAlt, BiLaptop, BiBriefcase, BiCog} from 'react-icons/bi';

export const SideBarData = [
    {
        title:'Home',
        path: '/',
        icon: <BiGridAlt className="nav-icon"/>,
        name: 'home'
    },
    {
        title: 'I.T',
        icon: <BiLaptop className="nav-icon"/>,
        name: 'Information Technology',
        subNav: [
            {
              title: 'Enterprise Systems Development',
              path: '/IT/ESD'
            },
            {
              title: 'Interaction Design',
              path: '/IT/ID'
            }
          ]
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