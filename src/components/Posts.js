import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="/images/profile.jpg" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>M.Inzamam Malik</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @InzamamMalik <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          My new Ai online chatbot course
        click here to visit ad: https://www.facebook.com/photo?fbid=580931176805719&set=a.319267146305458

Become a sponsor: https://www.patreon.com/Malikasinger
        </div>
        <div className="postss__details__img">
          <img src="/images/post.jpg" alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
