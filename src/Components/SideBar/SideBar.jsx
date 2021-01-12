import React from 'react';
import { Link } from 'react-router-dom';
import { BiBookAlt} from 'react-icons/bi';
import '../../Components/MainLayout.css';
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';

export default function SideBar({open}) {
   
    return (
        <div className={open ? "navbar show" : "navbar" } id="nav-bar">
            <nav className="nav">
                <div>
                    <Link to ="/" className="nav-logo">
                        <BiBookAlt className="nav-logo-icon"/>
                        <span className="logo-name">UTS Subject Reviews</span>
                    </Link>
                    <div className="nav-list">
                        {SideBarData.map((item, index)=> { 
                            return <SubMenu item={item} key={index}/>;
                        })}
                    </div>
                </div>
            </nav>
        </div>
    )
}
