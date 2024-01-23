import React from 'react';
import classes from './LoginForm.module.css';
import DiamondIcon from '@mui/icons-material/Diamond';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Apple } from '@mui/icons-material';
import SignForm from './SignForm';
import { useSelector } from 'react-redux';
import Google from '../assets/google.png';


const LoginForm = () => {
  const sign=useSelector(state=>state.sign);
  return (
    <div className={classes.main}>
        <div className={classes.firstHalf}>
          <div className={classes.topHeading} >LOGO</div>
          <h1>Board.</h1>
          <div className={`${classes.icons}`}>
            <GitHubIcon className={classes.iconSize} />
            <TwitterIcon className={classes.iconSize} />
            <LinkedInIcon className={classes.iconSize} />
            <InstagramIcon className={classes.iconSize} />
          </div>
        </div>
        <div className={classes.secondHalf}>
          <div className={classes.firstHeader}>
            <h1>{sign.head}</h1>
            <p>{sign.subHead}</p>
          </div>
          <div className={classes.btn}>
            <button><img src={Google} />Sign in with Gmail Account</button>
            <button><Apple/>Sign in with Apple Account</button>
          </div>
          <div className={classes.signForm}>
            <SignForm/>
          </div>
        </div>
    </div>
  )
}

export default LoginForm;