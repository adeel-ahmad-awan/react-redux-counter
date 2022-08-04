// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      // this will internally create new state. If we have code like this.
      state.counter++;
    },
    decrement(state) {
      // this will internally create new state. If we have code like this.
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.counter = !state.counter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "inc") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "incr") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "dec") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "tog") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

const store = configureStore({
  // we can add multiple reducer and it will merged as one behind the scenes.
  // reducer: {
  //   counter: counterSlice.reducer,
  // },

  // since we have one reducer. we will add it as the following.
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
