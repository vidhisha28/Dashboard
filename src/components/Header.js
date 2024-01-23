import React from 'react';
import classes from './Header.module.css';
import { Notifications } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import image from '../assets/sasuke-modified.png'

const Header = () => {
  return (
    <div className={classes.header}>
        <p>Dashboard</p>
        <div className={classes.content}>
            <div className={classes.input}>
             <input placeholder='Search...' />
             <button><Search className={classes.icon}/></button>
            </div>
            <div><Notifications className={classes.noti}/></div>
            <img src={image}/>
        </div>
    </div>
  )
}

export default Header;