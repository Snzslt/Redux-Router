//import {createStore} from 'redux';
//configureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier
import { configureStore } from "@reduxjs/toolkit"; 
import counterReducer from "./counter";
import authReducer from './auth';
const store = configureStore({
    reducer:{ counter: counterReducer , auth: authReducer },
});


export default store;