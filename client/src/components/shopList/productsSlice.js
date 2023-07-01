import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useProductsService from "../../services/useProductsService";

const initialState = {
    products: [],
    productsLoadingStatus: 'idle',
    page: 1,
    limit: 8,
    total: 0
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const { getAllProducts } = useProductsService();
        const products = await getAllProducts()
        return products
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        pageChanged: (state, action) => {
            state.page = action.payload
        },
        limitChanged: (state, action) => {
            state.limit = action.payload
        },
        totalChanged: (state, action) => {
            state.total = action.payload
        },
        productsFetching: state =>{
            state.productsLoadingStatus =  'loadibg'
        },
        productsFetched: (state, action) =>{
            state.products = action.payload
            state.productsLoadingStatus =  'idle'
        },
        productsFetchedError: state =>{
            state.productsLoadingStatus =  'error'
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.productsLoadingStatus = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsLoadingStatus = 'idle';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, state => {
                state.productsLoadingStatus = 'error';
            })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = productsSlice;

export const {
    pageChanged,
    limitChanged,
    totalChanged,
    productsFetched,
    productsFetchedError,
    productsFetching
} = actions;

export default reducer;
