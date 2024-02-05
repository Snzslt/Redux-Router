import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialCounterState = { counter: 0, showCounter: true}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;