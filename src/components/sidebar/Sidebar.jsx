import { NavLink } from "react-router-dom"
import './sidebar.scss'

export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="top">
                <span className="logo">Bessi</span>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <span>
a
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>
a
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>
a
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>
a
                        </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">Color</div>

            
            {/* <nav>
                <NavLink to="/" className="NavLink">Home</NavLink>
                <NavLink to="user" className="NavLink">User</NavLink>
                <NavLink to="login" className="NavLink">Login</NavLink>
            </nav> */}
        </nav>
    )
}
