import React, { useEffect, useState } from "react";
import "./AvatarInput.scss";
import Avatar from "../assets/img/addphoto.svg";

export const AvatarInput = () => {
  const [avatarImg, setAvatarImg] = useState(null);

  const handleAvatarInput = (e) => {
    const file = e.target.files[0];
    setAvatarImg(file);
  };

  return (
    <div className="avatar-input">
      <label htmlFor="avatar">add a photo</label>
      <input
        type="file"
        id="avatar"
        accept=".png, .jpg, .jpeg"
        onChange={handleAvatarInput}
      />
      <label htmlFor="avatar" className="avatar-img">
        <img src={Avatar} alt="" />
      </label>
    </div>
  );
};
