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

       
    }

});

export const { 

    toggleMenu  } = menuSlice.actions;
