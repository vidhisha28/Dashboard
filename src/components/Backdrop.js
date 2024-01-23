import React from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Backdrop.module.css';


const Backdrop = (props) => {
   const Back = (props)=>{
    return (
        <div className={`${classes.backdrop} ${props.className}`}>
            {props.children}
        </div>
    )
   }
  return (
   <React.Fragment>
    {ReactDOM.createPortal(<Back children={props.children}/>,document.getElementById('backdrop'))}
   </React.Fragment>
  )
}

export default Backdrop