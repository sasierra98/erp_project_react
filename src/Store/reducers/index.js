// import { combineReducers } from "@reduxjs/toolkit";
// import drawerReducer from "./drawerReducer";
// import appBarReducer from "./appBarReducer";

// export const reducers = combineReducers({drawerReducer, appBarReducer});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const appReducer = createSlice({
    name: "appReducer",
    initialState,
    reducers: {
        isOpen(state, action) {
            state.isOpen = action.payload.isOpen;
        }
    }
})

export default appReducer.reducer;

export const { isOpen } = appReducer.actions;
