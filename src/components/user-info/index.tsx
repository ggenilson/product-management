import React from "react";
import { images } from "../../constants";
import "./style.scss";

const UserInfo: React.FC = () => {
  return (
    <div className="user-info">
      <div className="user-info__img">
        <img src={images.avt} alt="" />
      </div>
      <div className="user-info__name">
        <span>ggenilsonaraujo</span>
      </div>
    </div>
  );
};

export default UserInfo;
