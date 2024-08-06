import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./TopBar.css";

const TopBar = function () {
  return (
    <header className="top-bar">
      <div className="top-bar__logo">
        <h3>FaceBook</h3>
      </div>
      <div className="top-bar__search-bar">
        <SearchOutlinedIcon className="top-bar__search-bar_search-icon" />
        <input placeholder="Search for a friend, post or video"></input>
      </div>
      <div className="top-bar__right-section">
        <ul className="top-bar__nav">
          <li>Homepage</li>
          <li>Timeline</li>
        </ul>
        <div className="top-bar__icons">
          <PersonIcon />
          <MessageIcon />
          <NotificationsIcon />
        </div>
        <div className="top-bar__personal-icon">
          <img
            src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
            alt="person image"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
