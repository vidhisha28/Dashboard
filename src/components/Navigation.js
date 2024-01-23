import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation = () => {
  return (
    <div className={classes.nav}>
        <h1>Board.</h1>
        <nav>
                <NavLink className={({isActive})=> (isActive?classes.active:undefined) }to='' end ><div><DashboardIcon className={classes.navIcon}/> Dashboard</div></NavLink>
                <NavLink className={({isActive})=> (isActive?classes.active:undefined) } to='transcation' end><div><LocalOfferIcon className={classes.navIcon} /> Transcations</div></NavLink>
                <NavLink className={({isActive})=> (isActive?classes.active:undefined) } to='schedules' end><div><ScheduleSendIcon className={classes.navIcon}/> Schedules</div></NavLink>
                <NavLink className={({isActive})=> (isActive?classes.active:undefined) } to='user' end><div><AccountCircleOutlinedIcon className={classes.navIcon} />  Users</div></NavLink>
                <NavLink className={({isActive})=> (isActive?classes.active:undefined) }to='setting' end ><div><SettingsIcon className={classes.navIcon}  />  Setting</div></NavLink>
        </nav>
        <div className={classes.footer}>
            <p>Help</p>
            <a href="mailto:mittalishaan2@example.com">Contact us</a>
        </div>
    </div>
  )
}

export default Navigation;