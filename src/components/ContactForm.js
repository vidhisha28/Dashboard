import React, { useState } from "react";
import classes from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../store/profile-slice";

const ContactForm = (props) => {
  const profile = useSelector(state => state.profile);
  const [insta,setInsta] = useState(profile.insta);
  const [ytube,setYtube] = useState(profile.youtube);
  const dispatch = useDispatch();
  const inputHandler=(data,id)=>{
    if(id==='insta'){
      setInsta(data);
    }
    else if(id==='youtube'){
      setYtube(data);
    } 
  }
  const prevHandler=()=>{
    dispatch(profileAction.setInfoStatus({infoStatus:'Basic'}));
    dispatch(profileAction.setInsta({insta:insta}));
    dispatch(profileAction.setYoutube({youtube:ytube}));
  }
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(profileAction.setInsta({insta:insta}));
    dispatch(profileAction.setYoutube({youtube:ytube}));
    dispatch(profileAction.setStatus());
    dispatch(profileAction.setSubmitStatus());
    dispatch(profileAction.setInfoStatus({infoStatus:'Basic'}));
  };
  
  return (
    <div className={classes.main}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.input}>
          <label htmlFor="InstagramLink">Instagram Link</label>
          <input
            type="text"
            onChange={(event)=>inputHandler(event.target.value,'insta')}
            value={insta}
            id="InstagramLink"
            placeholder="Eg. ..instagram.com/username"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="YoutubeLink">Youtube Link</label>
          <input
            type="text"
            onChange={(event)=>inputHandler(event.target.value,'youtube')}
            value={ytube}
            id="YoutubeLink"
            placeholder="Eg. ..youtube/username"
          />
        </div>
        <div className={classes.footer}>
          <button onClick={prevHandler} className={classes.back}>Back</button>
          <button className={classes.submit} type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
