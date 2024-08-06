import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import "./LeftSideBar.css";
import Avatar from "../../ui/Avatar";

const LeftSideBar = function () {
  return (
    <aside className="left-sidebar">
      <ul className="left-sidebar__icons">
        <li>
          <RssFeedIcon />
          <span>Feed</span>
        </li>
        <li>
          <ChatIcon />
          <span>Chats</span>
        </li>
        <li>
          <PlayCircleIcon />
          <span>Videos</span>
        </li>
        <li>
          <PeopleAltIcon />
          <span>Groups</span>
        </li>
        <li>
          <BookmarkIcon />
          <span>Bookmarks</span>
        </li>
        <li>
          <QuestionMarkIcon />
          <span>Questions</span>
        </li>
        <li>
          <WorkIcon />
          <span>Jobs</span>
        </li>
        <li>
          <EventIcon />
          <span>Events</span>
        </li>
        <li>
          <SchoolIcon />
          <span>Courses</span>
        </li>
      </ul>
      <button className="left-sidebar__btn--gray">Show More</button>
      <hr />
      <ul className="left-sidebar__friends-list">
        <Avatar
          src="https://c.ndtvimg.com/2021-07/6rf3vrig_mitchell-starc_625x300_05_July_21.jpg"
          userName="Mitchell Starc"
          className="avatar--transition"
        />
        <Avatar
          src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170769/dale-steyn.jpg"
          userName="Dale Steyn"
          className="avatar--transition"
        />
        <Avatar
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316600/316619.png"
          userName="Trent Boult"
          className="avatar--transition"
        />
        <Avatar
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316600/316619.png"
          userName="Trent Boult"
          className="avatar--transition"
        />
      </ul>
    </aside>
  );
};

export default LeftSideBar;
