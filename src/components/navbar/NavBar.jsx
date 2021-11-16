import { useState } from "react";
import "./NavBar.scss"
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom"
import { SidebarData } from "./SidebarData";

function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    return (
        <div className={sidebar ? 'navbar active' : 'navbar'} onMouseEnter = {() => setSidebar(true)} onMouseLeave = {() => setSidebar(false)}>
            <nav className="nav-menu">
                <Link to="#" className="nav-home">
                    <h1>XUFENG LI</h1>
                </Link>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </nav>
        </div>
    )
}

export default NavBar;