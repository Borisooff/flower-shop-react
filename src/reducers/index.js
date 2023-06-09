const initialState = {
    products: [],
    productsLoadingStatus: 'idle',
    filters: [],
    activeFilter: 'all',
    filtersLoadingStatus: 'idle',
    filteredProducts: [],
    searchedProducts: [],
    search: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS_FETCHING':
            return {
                ...state,
                productsLoadingStatus: 'loading'
            }
        case 'PRODUCTS_FETCHED':
            return {
                ...state,
                products: action.payload,
                productsLoadingStatus: 'idle',
                filteredProducts: state.activeFilter === 'all' ?
                    action.payload :
                    action.payload.filter(product => product.category === state.activeFilter),
                searchedProducts: action.payload
            }
        case 'PRODUCTS_FETCHING_ERROR':
            return {
                ...state,
                productsLoadingStatus: 'error'
            }
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload,
                filteredProducts: action.payload === 'all' ?
                    state.products :
                    state.products.filter(product => product.category === action.payload),
                searchedProducts: action.payload === 'all' ?
                    state.products :
                    state.products.filter(product => product.category === action.payload),

            }
        case 'SEARCH_CHANGED':
            return {
                ...state,
                search: action.payload,
                searchedProducts: action.payload === '' ?
                    state.filteredProducts :
                    state.filteredProducts.filter(product => {
                        return product.title.toLowerCase().includes(action.payload.toLowerCase())
                    })
            }
        default: return state
    }
}

export default reducer;