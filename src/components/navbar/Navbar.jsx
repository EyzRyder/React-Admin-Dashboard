import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import useDarkMode from '../../hooks/useDarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id="" placeholder='Search...' />
          <SearchOutlinedIcon />

        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>

          <div className="item">
            <ThemeIcon className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon/>
          </div>
          <div className="item">
            <img
              src="https://avatars.githubusercontent.com/u/85580011?v=4"
              alt=""
              className="avatar"
            />          </div>
        </div>
    </div>
    </nav>
  )
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <WbSunnyIcon className='colorOption' />
      ) : (
        <ModeNightIcon className='colorOption' />
      )}
    </span>
  );
};