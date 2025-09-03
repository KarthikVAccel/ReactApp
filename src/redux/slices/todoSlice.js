import { createSlice } from "@reduxjs/toolkit";

let intial = []
const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: intial,
  reducers: {
   add:(state,action)=>{
    state.push(action.payload) 
   },
   deleteTodo:(state,action)=>{
    state.splice(action.payload,1);
   }
  },
});

export const { add ,deleteTodo} = TodoSlice.actions;

export default TodoSlice.reducer;














