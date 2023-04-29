import React from 'react';

import './filter.scss'

const Filter = ({ active, setActive }) => {
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
                <div className="filter__item">
                    <label className='filter__label' htmlFor="rose">Rose</label>
                    <label className='switch' htmlFor="rose">
                        <input className='switch__input' type="checkbox" id='rose' />
                        <span className='switch__slider'></span>
                    </label>
                </div>
                <div className="filter__item">
                    <label className='filter__label' htmlFor="tulip">Tulip</label>
                    <label className='switch' htmlFor="tulip">
                        <input className='switch__input' type="checkbox" id='tulip' />
                        <span className='switch__slider'></span>
                    </label>
                </div>
                <div className="filter__item">
                    <label className='filter__label' htmlFor="toys">Toys</label>
                    <label className='switch' htmlFor="toys">
                        <input className='switch__input' type="checkbox" id='toys' />
                        <span className='switch__slider'></span>
                    </label>
                </div>
                <div className="filter__item">
                    <label className='filter__label' htmlFor="bouquets">Bouquets</label>
                    <label className='switch' htmlFor="bouquets">
                        <input className='switch__input' type="checkbox" id='bouquets' />
                        <span className='switch__slider'></span>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Filter;
