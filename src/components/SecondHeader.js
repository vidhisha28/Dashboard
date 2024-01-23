import React from 'react';
import classes from './SecondHeader.module.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const SecondHeader = () => {
  return (
    <div className={classes.header}>
        <div className={classes.content}>
            <div className={classes.iconDivd}><CloudDownloadIcon style={{backgroundColor:'#7fcd93'}} className={classes.icon}/></div>
            <div className={classes.first}>
                <div>
                    <p>Total Revenues </p>
                    <h3>$2,129,430</h3>
                </div>
                <p className={classes.p}>+2.5%</p>
            </div>
        </div>
        <div className={classes.content}>
            <div className={classes.iconDivd} ><LocalOfferIcon style={{backgroundColor:'#DEBF85'}} className={classes.icon}/></div>
            <div className={classes.first}>
                <div>
                    <p>Total Transcations</p>
                    <h3>1,520</h3>
                </div>
                <p className={classes.p}>+1.7%</p>
            </div>
        </div>
        <div className={classes.content}>
            <div className={classes.iconDiv}><ThumbUpAltOutlinedIcon style={{backgroundColor:'#ECA4A4'}} className={classes.icon}/></div>
            <div className={classes.first}>
                <div>
                    <p>Total Likes</p>
                    <h3>9,721</h3>
                </div>
                <p className={classes.p}>+1.4%</p>
            </div>
        </div>
        <div className={classes.content}>
            <div className={classes.iconDiv}><PeopleOutlineIcon style={{backgroundColor:'#A9B0E5'}} className={classes.icon}/></div>
            <div className={classes.first}>
                <div>
                    <p>Total Users</p>
                    <h3>9,721</h3>
                </div>
                <p className={classes.p}>+4.2%</p>
            </div>
        </div>
    </div>
  )
}

export default SecondHeader;