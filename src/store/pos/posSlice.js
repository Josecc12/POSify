import { createSlice } from "@reduxjs/toolkit";


export const posSlice = createSlice({
    name: 'pos',
    initialState: {
        status: 'not-authenticated',
        name: '',
        token: '',
        isMenuOpen: false,
        inventoryFilters: {
            store: 'All',
            category: 'All',
        },
        roles: [],
        categories: [],
        employees: [],
        products: [],

    },
    reducers: {



        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },

        setInventoryFilters: (state, { payload }) => {
            state.inventoryFilters = payload;
        },

        onLoadRoles: (state, { payload }) => {
            state.roles = payload;
        },

        onLoadCategories: (state, { payload }) => {
            state.categories = payload;
        },

        onLoadEmployees: (state, { payload }) => {
            console.log(payload)
            state.employees = payload;
        },
        onLoadProducts: (state, { payload }) => {
            state.products = payload;
        },

        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.name = payload.name;
            state.token = payload.token;
        },

        onLogout: (state) => {
            state.status = 'not-authenticated';
            state.name = '';
            state.token = '';
        }




    }


});

export const { 
                onLogin, onLogout,
                toggleMenu, setInventoryFilters,
                onLoadRoles , onLoadCategories,
                onLoadEmployees, onLoadProducts


} = posSlice.actions;
