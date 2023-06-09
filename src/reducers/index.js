const initialState = {
    products: [],
    productsLoadingStatus: 'idle',
    filters: [],
    activeFilter: 'all',
    filtersLoadingStatus: 'idle',
    filteredProducts: []
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
                    action.payload.filter(product => product.category === state.activeFilter)
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
                    state.products.filter(product => product.category === action.payload)
            }
        default: return state
    }
}

export default reducer;