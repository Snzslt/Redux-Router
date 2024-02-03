//import {createStore} from 'redux';
//configureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier 
import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = { counter: 0, showCounter: true}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers:{
      increment(state) {
          //this is forbidden when we use reducer but not with toolkit to manage state directly
          state.counter++;
      },
      decrement(state) {
        state.counter--; 
      },
      increase(state, action) {
          state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
          state.showCounter = !state.showCounter
      }
  }
});

// const counterReducer =(state = initialState , action) => {
//     if (action.type === 'increment'){
//         return{
//             counter: state.counter+ 1,
//             showCounter: state.showCounter
//         };
//     }
//      if(action.type === 'increase'){
//          return{
//              counter: state.counter + action.amount,
//              showCounter: state.showCounter
//          }
//      }
//     if(action.type === 'decrement'){
//         return{
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// };

const store = configureStore({
    reducer: counterSlice.reducer
});
export const counterActions = counterSlice.actions;

export default store;