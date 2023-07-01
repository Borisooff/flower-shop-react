import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isAuth: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAuthed: (state, action) => {
            state.isAuth = action.payload
        },
        userChanged: (state, action) => {
            state.user = action.payload
        }
    }
})

const { actions, reducer } = userSlice;

export default reducer;

export const { userAuthed, userChanged } = actions;