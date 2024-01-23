import React from 'react';
import classes from './AddProfileItem.module.css';
import Backdrop from './Backdrop';
import ProfileButton from './ProfileButton';
import { useSelector } from 'react-redux';
import BasicForm from './BasicForm';
import ContactForm from './ContactForm';

const AddProfileItem = () => {
  const profile = useSelector(state=>state.profile);
  return (
    <Backdrop>
        <div className={classes.profile}>
            <div className={classes.header}><p>Add New Profile</p></div>
            <ProfileButton />
            {profile.infoStatus==='Basic' && <BasicForm/>}
            {profile.infoStatus==='Contact' && <ContactForm/>}
        </div>
    </Backdrop>
  )
}

export default AddProfileItem