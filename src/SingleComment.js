import React from "react";
import avatar from "./image/avatar.png";

const SingleComment = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="profile picture" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">Today at 5:00PM</span>
        </div>
        <div className="text">it's good</div>
      </div>
    </div>
  );
};

export default SingleComment;
