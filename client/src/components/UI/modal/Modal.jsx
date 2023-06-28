import React from 'react';
import classes from './modal.module.scss'

const Modal = ({ children, active, setActive }) => {
    const modalClasses = [classes.modal];

    if (active) {
        modalClasses.push(classes.active)
    }

    return (
        <div className={modalClasses.join(' ')}
            onClick={() => setActive(false)}>
            <div className={classes.content} onClick={e => e.stopPropagation()}>
                <div className={classes.close}
                    onClick={() => setActive(false)}>
                    <img src="./assets/shop/close-icon.svg" alt="close" />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal;
