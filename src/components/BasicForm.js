import React, { useState} from "react";
import classes from "./BasicForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../store/profile-slice";

const BasicForm = () => {
  const dispatch = useDispatch();
  const profile=useSelector(state=>state.profile);
  const [name,setname]=useState(profile.name);
  const[mail,setEmail]=useState(profile.mail);
  const [tel,setTel] = useState(profile.tel);
  const inputHandler=(data,id)=>{
    if(id==='name'){
      setname(data);
    }
    else if(id==='mail'){
     setEmail(data);
    } 
    else if(id==='tel'){
      setTel(data);
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(profileAction.setName({name:name}));
    dispatch(profileAction.setMail({mail:mail}));
    dispatch(profileAction.setTel({tel:tel}));
    dispatch(profileAction.setInfoStatus({ infoStatus: "Contact" }));
    setEmail('');
    setname('');
    setTel('');
   };
  return (
    <div className={classes.main}>
      <form className={classes.form}>
        <div className={classes.input}>
          <label htmlFor="name">Enter Name*</label>
          <input
            onChange={(event)=>inputHandler(event.target.value,'name')}
            value={name}
            type="text"
            id="name"
            placeholder="Eg. John Doe"
            required
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="email">Enter Email*</label>
          <input
            onChange={(event)=>inputHandler(event.target.value,'mail')}
            value={mail}
            type="email"
            id="email"
            placeholder="Eg. John@xyz.com"
            required
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="tel">Enter Phone*</label>
          <input
            onChange={(event)=>inputHandler(event.target.value,'tel')}
            value={tel}
            type="tel"
            id="tel"
            placeholder="Eg. 9123456789"
            required
          />
        </div>
        <div className={classes.footer}>
          <button onClick={submitHandler}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
