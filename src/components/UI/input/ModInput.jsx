import React from 'react';
import classes from './modInput.module.scss';

const ModInput = ({...props}) => {
    return (
        <input className={classes.modInput} type="text" {...props}/>
  )
}

export default ModInput;
