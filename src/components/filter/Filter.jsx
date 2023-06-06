import React, { useEffect, useState } from 'react';

import Modal from '../UI/modal/Modal';
import Switch from '../UI/switch/Switch';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import useShopService from '../../services/shopService';

import './filter.scss';

const Filter = ({ active, setActive }) => {

    const [filters, setFilters] = useState([]);

    const { loading, error, getAllFilters } = useShopService();

    useEffect(() => {
        getAllFilters()
            .then(res => setFilters(res))
    }, []);

    return (
        <Modal active={active} setActive={setActive}>
            <form className={active ? 'filter active' : 'filter'}
                onClick={e => e.stopPropagation()}>
                <div className="filter__close"
                    onClick={() => setActive(false)}>
                    <img src="./assets/shop/close-icon.svg" alt="close" />
                </div>
                <div className="filter__title">Filtering</div>
                {filters.map(filter => {
                    return (
                        <Switch key={filter} filter={filter} />
                    )
                })}
                {error ? <ErrorMessage /> : null}
                {loading ? <Spinner /> : null}
            </form>
        </Modal>
    );
}

export default Filter;
