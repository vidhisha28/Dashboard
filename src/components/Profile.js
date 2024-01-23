import React from "react";
import classes from "./Profile.module.css";
import { useSelector } from "react-redux";
import { WhatsApp, Instagram, Mail, YouTube } from "@mui/icons-material";

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <div className={classes.main}>
      <p>{profile.name}</p>
      <div className={classes.content}>
        <div className={classes.item}>
          <div
            style={{ backgroundColor: "#E9F9EB", color: "#3CC952" }}
            className={classes.backIcon}
          >
            <WhatsApp />
          </div>
          <span className={classes.data}>+91{profile.tel}</span>
        </div>
        <div className={classes.item}>
          <div
            style={{ backgroundColor: "#FFE9EC", color: "#FF4E64" }}
            className={classes.backIcon}
          >
            <Instagram />
          </div>
          <span className={classes.data}>{profile.insta}</span>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.item}>
          <div
            style={{ backgroundColor: "#EBE6F9", color: "#5C33CF" }}
            className={classes.backIcon}
          >
            <Mail />
          </div>
          <span className={classes.data}>{profile.mail}</span>
        </div>
        <div className={classes.item}>
          <div
            style={{ backgroundColor: "#FFE9E9", color: "#FF0000" }}
            className={classes.backIcon}
          >
            <YouTube />
          </div>
          <span className={classes.data}>{profile.youtube}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
