import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtersFetched, filtersFetching, filtersFetchingError, changeFilter } from '../../actions';

import Switch from '../UI/switch/Switch';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import useShopService from '../../services/shopService';

import './filter.scss';

const Filter = () => {
    const { filters, filtersLoadingstatus, activeFilter } = useSelector(state => state);
    const dispatch = useDispatch();
    const { getAllFilters } = useShopService();

    useEffect(() => {
        dispatch(filtersFetching())
        getAllFilters()
            .then(res => dispatch(filtersFetched(res)))
            .catch(() => dispatch(filtersFetchingError()))
    }, []);

    return (
        <form className='filter'>
            <div className="filter__title">Filtering</div>
            {filters.map(({ name, label }) => {
                return (
                    <Switch onClick={() => dispatch(changeFilter(name))} checked={name === activeFilter} label={label} key={name} filter={name} />
                )
            })}
            {filtersLoadingstatus === 'error' ? <ErrorMessage /> : null}
            {filtersLoadingstatus === 'loading' ? <Spinner /> : null}
        </form>
    );
}

export default Filter;
