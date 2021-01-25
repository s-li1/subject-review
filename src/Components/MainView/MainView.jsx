import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar';
import Contents from '../Contents';
import { BiMenu, BiX }from 'react-icons/bi';
import '../MainLayout.css';
import SearchBar from '../SearchBar';

export default function MainView(props) {
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
                <SearchBar search={props.disableSearchBar}handleChange={props.input}/>
        </div>
        <Contents open={sidebar}>
            {props.children}
        </Contents>
        </>
            
    )
}
