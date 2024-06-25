import { createSlice } from "@reduxjs/toolkit";

const currentRouteSlice = createSlice({
    name: 'currentRoute',
    initialState: null,
    reducers: {
        setCurrentRoute: (state, action) => {
            return action.payload;
        }
    }
});

export const { setCurrentRoute } = currentRouteSlice.actions;

export const currentRouteReducer = currentRouteSlice.reducer;

export const rootReducer = {
    currentRoute: currentRouteReducer,
};