import React from 'react';
import classes from './modButton.module.scss';

const ModButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.modButton}>
            {children}
        </button>
    )
}

export default ModButton;