import React from 'react';
import { Link } from 'react-router-dom';
import { BiBookAlt, BiGridAlt, BiLaptop, BiCertification} from 'react-icons/bi';
import '../../Components/MainLayout.css';
import { SideBarData } from './SideBarData';

export default function SideBar({open}) {
    // //Show SideBar
    // const [sidebar, setSidebar] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className={open ? "navbar show" : "navbar" } id="nav-bar">
            <nav className="nav">
                <div>
                    <Link to ="/" className="nav-logo">
                        <BiBookAlt className="nav-logo-icon"/>
                        <span className="logo-name">UTS Subject Reviews</span>
                    </Link>

                    <div className="nav-list">
                        <Link to="/" className="nav-link">
                            <BiGridAlt className="nav-icon"/>
                            <span className="nav-name">Grid</span>
                        </Link>

                        <Link to="/IT" className="nav-link">
                            <BiLaptop className="nav-icon"/>
                            <span className="nav-name">I.T</span>
                        </Link>

                        <Link to="/engineering" className="nav-link">
                            <BiCertification className="nav-icon"/>
                            <span className="nav-name">Engineering</span>
                        </Link>
                        {SideBarData.map((item)=> { return (
                            <Link to={item.path}>
                                <span className="nav-name">{item.title}</span>
                            </Link>)
                        })}
                    </div>
                </div>
            </nav>
        </div>
    )
}
