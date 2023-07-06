import { useDispatch, useSelector } from 'react-redux';

import { pageChanged } from '../shopList/productsSlice';

import './pagination.scss';

const Pagination = () => {
    const { total, limit, page } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const pages = [];

    const pageCount = Math.ceil(total / limit)

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <>
            {pages.length > 1 ?
                <div className="pagination__buttonbox">
                    {
                        pages.map(pageNumber => {
                            const btnClass = pageNumber === page ? 'pagination__button active' : 'pagination__button';
                            return (
                                <button
                                    key={pageNumber}
                                    className={btnClass}
                                    primary={pageNumber === page}
                                    onClick={() => dispatch(pageChanged(pageNumber))}>
                                    {pageNumber}
                                </button>
                            )
                        })
                    }
                </div> : null
            }
        </>
    );
}

export default Pagination;