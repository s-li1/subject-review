import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SubMenu({item}) {
    const [subNav, setSubNav] = useState(false);

    const showSubNav = () => setSubNav(!subNav);

    return (
        <>
            <Link className="nav-link" onClick={item.subNav && showSubNav}>
                {item.icon}
                <span className="nav-name">{item.title}</span>
            </Link>
            {subNav && item.subNav.map((item,index)=> {
                return (
                    <Link key={index} to={item.path} className="nav-link" >
                        <span className="nav-name">{item.title}</span>
                    </Link>
                );
            })}
        </>
    );
};

