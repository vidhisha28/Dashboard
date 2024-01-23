import React from "react";
import classes from './ProfileButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../store/profile-slice";
const ProfileButton = (props) => {
  const dispatch = useDispatch();
  const infoStatus = useSelector(state=>state.profile.infoStatus);
  let check=true;
  if(infoStatus==='Basic'){
    check=true;
  }else{
    check=false;
  }
  return (
    <div className={classes.button}>
      <div className={classes.btn}>
        <button >Basic</button>
        <hr style={{backgroundColor:`${check ? '#3F84F8' : '#D9D9D9'}`}} />
      </div>
      <div className={classes.btn}>
        <button>Contact</button>
        <hr  style={{backgroundColor:`${check ? '#D9D9D9' : '#3F84F8'}`}}/>
      </div>
    </div>
  );
};

export default ProfileButton;
