import React, { useContext } from "react";
import { images } from "../../constants";
import { AuthUserContext } from "../../contexts";
import "./style.scss";

const UserInfo: React.FC = () => {
  const { userData } = useContext(AuthUserContext);

  return (
    <div className="user-info">
      <div className="user-info__img">
        <img src={images.avt} alt="" />
      </div>
      <div className="user-info__name">
        <span>{userData?.user.name}</span>
      </div>
    </div>
  );
};

export default UserInfo;
