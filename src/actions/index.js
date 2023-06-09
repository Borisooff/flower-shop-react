export const productsFetching = () => {
    return {
        type: 'PRODUCTS_FETCHING'
    }
}

export const productsFetched = (heroes) => {
    return {
        type: 'PRODUCTS_FETCHED',
        payload: heroes
    }
}

export const productsFetchingError = () => {
    return {
        type: 'PRODUCTS_FETCHING_ERROR'
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

export const changeFilter = (filter) => {
    return {
        type: 'FILTER_CHANGED',
        payload: filter
    }
}

export const changeSearch = (search) => {
    return {
        type: 'SEARCH_CHANGED',
        payload: search
    }
}