import React, { useEffect, useState } from "react";
import "./AvatarInput.scss";
import Avatar from "../assets/img/addphoto.svg";

export const AvatarInput = (props) => {
  const [avatarImg, setAvatarImg] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleAvatarInput = (e) => {
    const file = e.target.files[0];

    setAvatarImg(file);
  };
  //////////////////

  useEffect(() => {
    if (avatarImg) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setPreview(result);
        props.onGetAvatar({ avatar: result });
      };
      /// ?????
      reader.readAsDataURL(avatarImg);
    } else {
      setPreview(null);
    }
  }, [avatarImg]);

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
        <img src={preview ? preview : Avatar} alt="" />
      </label>
    </div>
  );
};
