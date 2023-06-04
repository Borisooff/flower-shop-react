import React from 'react';
import classes from './modal.module.scss'

const Modal = ({ children, active, setActive }) => {
    const modalClasses = [classes.modal];
    
    if (active){
        modalClasses.push(classes.active)
    }

    return (
        <div className={modalClasses.join(' ')}
            onClick={() => setActive(false)}>
            {children}
        </div>
    )
}

export default Modal;
