import React from 'react'

const Switch = (filter) => {
    return (
        <div key={filter} className="filter__item">
            <label className='filter__label' htmlFor={filter}>{filter}</label>
            <label className='switch' htmlFor={filter}>
                <input className='switch__input' type="checkbox" id={filter} />
                <span className='switch__slider'></span>
            </label>
        </div>
    )
}

export default Switch;