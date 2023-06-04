import React from 'react';
import Modal from '../UI/modal/Modal';
import Switch from '../UI/switch/Switch';

import './filter.scss'

const Filter = ({ active, setActive }) => {

    const filterData = [
        'Rose', 'Tulip', 'Gifts', 'Bouquets'
    ]

    return (
        <Modal active={active} setActive={setActive}>
            <form className={active ? 'filter active' : 'filter'}
                onClick={e => e.stopPropagation()}>
                <div className="filter__close"
                    onClick={() => setActive(false)}>
                    <img src="./assets/shop/close-icon.svg" alt="close" />
                </div>
                <div className="filter__title">Filtering</div>
                {filterData.map(filter => {
                    return (
                        <Switch filter={filter}/>
                    )
                })}
            </form>
        </Modal>
    );
}

export default Filter;
