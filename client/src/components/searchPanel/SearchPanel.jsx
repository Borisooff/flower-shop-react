import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchChanged } from './searchSlice';
import { priceFilterChaged } from './priceFilterSlice';

import Filter from '../filter/Filter';
import ModInput from '../UI/input/ModInput';
import Modal from '../UI/modal/Modal';

import './searchPanel.scss';

const SearchPanel = () => {
    const { priceFilter } = useSelector(state => state.priceFilter)
    const { search } = useSelector(state => state.search);
    const [filterOpen, setFilterOpen] = useState(false);
    const dispatch = useDispatch();

    const onInputClear = (event) => {
        event.preventDefault();
        dispatch(searchChanged(''))
    }

    return (
        <div className='panel'>
            <button onClick={() => setFilterOpen(!filterOpen)}
                className='panel__filter__btn'>Filtering</button>
            <Modal active={filterOpen}
                setActive={setFilterOpen}>
                <Filter />
            </Modal>
            <form className='search'
                onSubmit={event => event.preventDefault()}>
                <ModInput
                    tabIndex={1}
                    onSubmit={event => event.preventDefault()}
                    value={search}
                    onChange={(e) => dispatch(searchChanged((e.target.value)))}
                    placeholder='Search....' />
                <div className='search__btn'>
                    {search === '' ?
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_40_231)">
                                <path d="M22.4746 19.9319L17.0975 14.5547C18.3202 12.7394 18.9235 10.4713 18.6005 8.05454C18.0498 3.94374 14.6807 0.598405 10.5658 0.077446C4.44791 -0.696693 -0.696546 4.44776 0.0776375 10.5657C0.598731 14.6823 3.94451 18.0541 8.05576 18.6022C10.4726 18.9251 12.7411 18.3221 14.556 17.0991L19.9331 22.4763C20.6348 23.1779 21.7727 23.1779 22.4743 22.4763C23.1754 21.7737 23.1754 20.6327 22.4746 19.9319ZM3.55351 9.34379C3.55351 6.17321 6.13293 3.5938 9.30351 3.5938C12.4741 3.5938 15.0535 6.17321 15.0535 9.34379C15.0535 12.5144 12.4741 15.0938 9.30351 15.0938C6.13293 15.0938 3.55351 12.5153 3.55351 9.34379Z" fill="#838383" />
                            </g>
                            <defs>
                                <clipPath id="clip0_40_231">
                                    <rect width="23" height="23" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        :
                        <div tabIndex={2} className='search__clear'
                            onClick={event => onInputClear(event)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16px" height="16px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>
                        </div>
                    }
                </div>
            </form>
            <div className={priceFilter === 'Cheap' ? "panel__price" : "panel__price expensive"}
                onClick={() => priceFilter === 'Cheap' ? dispatch(priceFilterChaged('Expensive')) : dispatch(priceFilterChaged('Cheap'))}>
                <span>{priceFilter}</span>
            </div>
        </div>
    );
}

export default SearchPanel;
