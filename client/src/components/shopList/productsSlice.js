import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useShopService from "../../services/shopService";

const initialState = {
    products: [],
    productsLoadingStatus: 'idle',
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const { getAllProducts } = useShopService();
        return await getAllProducts();
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
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

const { reducer } = productsSlice;

export default reducer;
