import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar';
import Contents from './Contents';
import { BiMenu, BiX }from 'react-icons/bi';
import '../../Components/MainLayout.css';
import SearchBar from '../SearchBar';

export default function Main(props) {
    //Show SideBar
    const [sidebar, setSidebar] = useState(false);

    const handleSideNav = () => {
        setSidebar(!sidebar);
        return sidebar;
    }
    return (
        <>
        <SideBar open={sidebar} />
        <div className={sidebar ? "header isPushed" : "header"} id="header">
                <div className="header-toggle" onClick={handleSideNav} >
                    {sidebar? <BiX/> : <BiMenu/>}
                </div>
                <SearchBar handleChange={props.input}/>
        </div>
        <Contents open={sidebar}>
            {props.children}
        </Contents>
        </>
            
    )
}
