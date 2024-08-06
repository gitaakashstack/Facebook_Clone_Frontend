import Feed from "../components/Feed";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import "./Home.css";

const Home = function () {
  return (
    <main className="home-page">
      <LeftSideBar />
      <div className="feed-and-right-side-bar">
        <Feed />
        <RightSideBar />
      </div>
    </main>
  );
};

export default Home;
