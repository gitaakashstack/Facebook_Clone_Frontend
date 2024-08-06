import "./Avatar.css";

const Avatar = function (props) {
  const { src, alt = "", userName, className } = props;
  const modifiedClassName = "avatar-section " + (className ? className : "");

  return (
    <li className={modifiedClassName}>
      <div className="avatar-section__avatar">
        <img src={src} alt={alt} />
      </div>
      <div className="avatar-section__user-name">{userName}</div>
    </li>
  );
};

export default Avatar;
