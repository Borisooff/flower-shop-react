import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchChanged: (state, action) => {
            state.search = action.payload;
        }
    }
})

const {actions, reducer} = searchSlice;

export default reducer;

export const {searchChanged} = actions;
    
