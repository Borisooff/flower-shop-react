import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeFilterChanged, fetchFilters } from './filtersSlice';

import Switch from '../UI/switch/Switch';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './filter.scss';

const Filter = () => {
    const { filters, filtersLoadingstatus, activeFilter } = useSelector(state => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilters())
    }, []);

    return (
        <form className='filter'>
            <div className="filter__title">Filtering</div>
            {filters.map(({ name, label }) => {
                return (
                    <Switch onClick={() => dispatch(activeFilterChanged(name))} checked={name === activeFilter} label={label} key={name} filter={name} />
                )
            })}
            {filtersLoadingstatus === 'error' ? <ErrorMessage /> : null}
            {filtersLoadingstatus === 'loading' ? <Spinner /> : null}
        </form>
    );
}

export default Filter;
