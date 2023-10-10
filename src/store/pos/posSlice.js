import { createSlice } from "@reduxjs/toolkit";


export const posSlice = createSlice({
    name: 'pos',
    initialState: {
        isMenuOpen: false,  
        inventoryFilters: {
            store: 'All',
            category: 'All',
        }   

    },
    reducers: {


        
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },

        setInventoryFilters: (state, { payload }) => {
            state.inventoryFilters = payload;
          },
       



    }


});

export const {toggleMenu , setInventoryFilters } = posSlice.actions;
