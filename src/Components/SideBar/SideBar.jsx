import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiBookAlt, BiUserCircle} from 'react-icons/bi';
import '../../Components/MainLayout.css';
import { SideBarData } from './SideBarData';
import { signInWithGoogle, signOut } from '../../Config/Firebase/firebase';
import { UserContext } from '../../Providers/UserProvider'
export default function SideBar({open}) {
    const user = useContext(UserContext);
    return (
        <div className={open ? "navbar show" : "navbar" } id="nav-bar">
            <nav className="nav">
                <div>
                    <Link to ="/" className="nav-logo">
                        <BiBookAlt className="nav-logo-icon"/>
                        <span className="logo-name">UTS Subject <br/>Reviews</span>
                    </Link>
                    <div className="nav-list">
                        {SideBarData.map((item, index)=> { 
                            return (
                            <Link key= {index} to={item.path} className="nav-link">
                                {item.icon}
                                <span className="nav-name">{item.title}</span>
                            </Link>)
                        })}
                    </div>
                    {user ? <button className="authentication" onClick={signOut}><BiUserCircle className="nav-icon"/> <span className="nav-name">Sign Out</span></button> : <button className="authentication" onClick={signInWithGoogle}><BiUserCircle className="nav-icon"/>Sign In</button>}
                    {
                    user && open ? 
                        <div className="profile">
                            <p>{user.email}</p>
                        </div> 
                    :null
                    }
                </div>
            </nav>
        </div>
    )
}
