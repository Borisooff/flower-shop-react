import React, { useEffect, useState } from 'react';

import Switch from '../UI/switch/Switch';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import useShopService from '../../services/shopService';

import './filter.scss';

const Filter = () => {

    const [filters, setFilters] = useState([]);

    const { loading, error, getAllFilters } = useShopService();

    useEffect(() => {
        getAllFilters()
            .then(res => setFilters(res))
    }, []);

    return (
        <form className='filter'>
            <div className="filter__title">Filtering</div>
            {filters.map(filter => {
                return (
                    <Switch key={filter} filter={filter} />
                )
            })}
            {error ? <ErrorMessage /> : null}
            {loading ? <Spinner /> : null}
        </form>
    );
}

export default Filter;
