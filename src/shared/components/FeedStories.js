import "./FeedStories.css";

const FeedStories = function () {
  const x = [1, 2, 3, 4];
  const arr = x.map((val) => (
    <li className="feed-item">
      <div className="feed-item__header">
        <div className="feed-item__avatar">
          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322611.png" />
        </div>
        <div className="feed-item__user-name">Md. Siraj</div>
        <div className="feed-item__time-passed">5 mins ago</div>
      </div>
      <div className="feed-item__caption">My First Post</div>
      <div className="feed-item__post-image">
        <img src="https://www.tamilnadutourism.com/images/trichy/card/sri-ranganathaswamy-temple-trichy.jpg" />
      </div>
      <div className="feed-item__footer">
        <div className="feed-item__react">
          <div className="feed-item__like-react">
            <img src="assets/facebook-like-vector-icon-white-background-128850059.jpg" />
          </div>
          <div className="feed-item__love-react">
            <img src="assets\8cbf03b29ed84a93685c265cad92aa78.jpg" />
          </div>
          <div className="feed-item__react-count">32 people like this</div>
        </div>
        <div className="feed-item__comment-count">10 comments</div>
      </div>
    </li>
  ));
  return <ul className="feed-item-list">{arr}</ul>;
};

export default FeedStories;
