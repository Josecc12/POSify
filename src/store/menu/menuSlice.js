import { createSlice } from "@reduxjs/toolkit";


export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isMenuOpen: true,
        collapsedMenus: [] /*['Dashboard','Articulos'] */
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },

        setSubMenu: (state, { payload }) => {
            state.collapsedMenus.push(payload);
        },

        removeSubMenu: (state, { payload }) => {
            state.collapsedMenus = state.collapsedMenus.filter(item => item !== payload);
        },
    }

});

export const { 

    toggleMenu, setSubMenu, removeSubMenu } = menuSlice.actions;
