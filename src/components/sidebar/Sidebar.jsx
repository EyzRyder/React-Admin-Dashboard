import './sidebar.scss'
import { NavLink } from "react-router-dom"
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
                <span className="logo">Bessi Dev</span>
            </div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>
                            Dashboard
                        </span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PermIdentityOutlinedIcon className="icon" />
                        <span>
                            Users
                        </span>
                    </li>
                    <li>
                        <StoreIcon className="icon" />
                        <span>
                            Products
                        </span>
                    </li>
                    <li>
                        <CreditCardOutlinedIcon className="icon" />
                        <span>
                            Orders
                        </span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>
                            Delivery
                        </span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>
                            Stats
                        </span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <span>
                            Notifications
                        </span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>
                            System Heath
                        </span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>
                            Logs
                        </span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>
                            Settings
                        </span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>
                            Profile
                        </span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon" />
                        <span>
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
            {/* <nav>
                <NavLink to="/" className="NavLink">Home</NavLink>
                <NavLink to="user" className="NavLink">User</NavLink>
                <NavLink to="login" className="NavLink">Login</NavLink>
            </nav> */}
        </nav>
    )
}
