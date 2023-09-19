import { createSlice } from "@reduxjs/toolkit";


export const posSlice = createSlice({
    name: 'pos',
    initialState: {
        activeView: null,
        isMenuOpen: false,     

    },
    reducers: {


        setAcitveView: (state, { payload }) => {
            state.activeView = payload;
        },
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
       



    }


});

export const { setAcitveView, toggleMenu } = posSlice.actions;
