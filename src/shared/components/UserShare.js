import "./UserShare.css";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const UserShare = function () {
  return (
    <section className="user-share">
      <div className="user-share__input">
        <div className="user-share__avatar">
          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322611.png" />
        </div>
        <input placeholder="What's in your mind Siraj ?" />
      </div>
      <hr />
      <div className="user-share__icons-btn">
        <div className="user-share__icons-list">
          <div className="user-share__icon--orange user-share__icon-item">
            <AddToPhotosIcon />
            <div>Photos or Videos</div>
          </div>
          <div className="user-share__icon--blue user-share__icon-item">
            <LocalOfferIcon />
            <div>Tag</div>
          </div>
          <div className="user-share__icon--green user-share__icon-item">
            <LocationOnIcon />
            <div>Location</div>
          </div>
          <div className="user-share__icon--yellow user-share__icon-item">
            <EmojiEmotionsIcon />
            <div>Feelings</div>
          </div>
        </div>
        <button className="user-share__share-btn--green">Share</button>
      </div>
    </section>
  );
};

export default UserShare;
