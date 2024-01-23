import React from 'react';
import classes from './Footer.module.css';
import PieChart from './PieChart';
import AddProfie from './AddProfie';
import {useSelector} from 'react-redux';
import AddProfileItem from './AddProfileItem';

const Footer = () => {
  const profile = useSelector(state => state.profile);
  return (
    <div className={classes.footer}>
        <PieChart/>
        <AddProfie />
        {profile.status && <AddProfileItem/>}
    </div>
  )
}

export default Footer