import { configureStore } from "@reduxjs/toolkit";
import { posSlice } from "./pos/posSlice";
import {  menuSlice } from './menu/menuSlice'



export const store = configureStore({
    reducer:{
        pos: posSlice.reducer,
        menu: menuSlice.reducer,
        
    }


})