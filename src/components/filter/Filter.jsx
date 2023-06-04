import React from 'react';

import './filter.scss'

const Filter = ({ active, setActive }) => {

    const filterData = [
        'Rose', 'Tulip', 'Gifts', 'Bouquets'
    ]

    return (
        <div className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}>
            <form className={active ? 'filter active' : 'filter'}
                onClick={e => e.stopPropagation()}>
                <div className="filter__close"
                    onClick={() => setActive(false)}>
                    <img src="./assets/shop/close-icon.svg" alt="close" />
                </div>
                <div className="filter__title">Filtering</div>
                {filterData.map(item => {
                    return (
                        <div key={item} className="filter__item">
                            <label className='filter__label' htmlFor={item}>{item}</label>
                            <label className='switch' htmlFor={item}>
                                <input className='switch__input' type="checkbox" id={item} />
                                <span className='switch__slider'></span>
                            </label>
                        </div>
                    )
                })}
            </form>
        </div>
    );
}

export default Filter;
