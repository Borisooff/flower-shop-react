import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useCategoriesService from '../../services/useCategoriesService';
const initialState = {
    filters: [],
    activeFilter: null,
    filtersLoadingStatus: 'idle',
}

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const { getAllFilters } = useCategoriesService();
        return await getAllFilters();
    }
);

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFilters.pending, state => {
                state.filtersLoadingStatus = 'loading';
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = 'idle';
                state.filters = action.payload;
            })
            .addCase(fetchFilters.rejected, state => {
                state.filtersLoadingStatus = 'error';
            })
    }
})

const { actions, reducer } = filtersSlice;

export default reducer;

export const {
    activeFilterChanged
} = actions;