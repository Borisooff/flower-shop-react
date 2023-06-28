import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    priceFilter: 'Cheap'
}

const priceSlice = createSlice({
    name: 'priceFilter',
    initialState,
    reducers: {
        priceFilterChaged: (state, action) => {
            state.priceFilter = action.payload
        }
    }
})

const { actions, reducer } = priceSlice;

export default reducer;

export const {priceFilterChaged} = actions;