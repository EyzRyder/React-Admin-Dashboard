import './sidebar.scss'
import { Link, NavLink } from "react-router-dom"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="top">
                <Link to="/">
                    <span className="logo">Bessi Dev</span>
                </Link>
            </div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <NavLink to="/">
                        <li>
                            <DashboardIcon className="icon" />
                            <span>
                                Dashboard
                            </span>
                        </li>
                    </NavLink>
                    <p className="title">LISTS</p>
                    <NavLink to="/users">
                        <li>
                            <PermIdentityOutlinedIcon className="icon" />
                            <span>
                                Users
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/products">
                        <li>
                            <StoreIcon className="icon" />
                            <span>
                                Products
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/orders">
                        <li>
                            <CreditCardOutlinedIcon className="icon" />
                            <span>
                                Orders
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/deliveries">
                        <li>
                            <LocalShippingIcon className="icon" />
                            <span>
                                Delivery
                            </span>
                        </li>
                    </NavLink>
                    <p className="title">USEFUL</p>
                    <NavLink to="/">
                        <li>
                            <InsertChartIcon className="icon" />
                            <span>
                                Stats
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li>
                            <NotificationsNoneOutlinedIcon className="icon" />
                            <span>
                                Notifications
                            </span>
                        </li>
                    </NavLink>
                    <p className="title">SERVICE</p>
                    <NavLink to="/">
                        <li>
                            <SettingsSystemDaydreamOutlinedIcon className="icon" />
                            <span>
                                System Heath
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/">

                        <li>
                            <PsychologyOutlinedIcon className="icon" />
                            <span>
                                Logs
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li>
                            <SettingsApplicationsIcon className="icon" />
                            <span>
                                Settings
                            </span>
                        </li>
                    </NavLink>
                    <p className="title">USER</p>
                    <NavLink to="/">

                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>
                                Profile
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li>
                            <ExitToAppOutlinedIcon className="icon" />
                            <span>
                                Logout
                            </span>
                        </li>
                    </NavLink>
                </ul>
            </div>
            {/* <div className="bottom"> */}
                {/* <ThemeIcon /> */}
                {/* <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div> */}
            {/* </div> */}
            {/* <nav>
                <NavLink to="/" className="NavLink">Home</NavLink>
                <NavLink to="user" className="NavLink">User</NavLink>
                <NavLink to="login" className="NavLink">Login</NavLink>
            </nav> */}
        </nav>
    )
}

