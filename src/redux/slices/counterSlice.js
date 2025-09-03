import { createSlice } from "@reduxjs/toolkit";

let intial = {
  value :0
};
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: intial,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
       state.value -= 1;
       if(state.value <0){
        state.value=0
       }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;

