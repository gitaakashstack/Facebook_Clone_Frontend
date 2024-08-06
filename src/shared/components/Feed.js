import UserShare from "./UserShare";
import "./Feed.css";
import FeedStories from "./FeedStories";

const Feed = function () {
  return (
    <section className="feed">
      <UserShare />
      <FeedStories />
    </section>
  );
};

export default Feed;
