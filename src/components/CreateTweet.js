import React from "react";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";
const CreateTweet = () => {
  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src="/images/profile.jfif" alt="profile img" />
        </div>
        <div className="create__input">
          <input
            type="text"
            className="create__control"
            placeholder="What's happing?"
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="create__btn">
          <a href="">Tweet</a>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
