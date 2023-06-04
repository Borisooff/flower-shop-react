import React from 'react';
import classes from './switch.module.scss';

const Switch = ({filter}) => {
    return (
        <div className={classes.filter}>
            <label className={classes.label} htmlFor={filter}>{filter}</label>
            <label className={classes.switch} htmlFor={filter}>
                <input className={classes.switch__input} type="checkbox" id={filter} />
                <span className={classes.switch__slider}></span>
            </label>
        </div>
    )
}

export default Switch;