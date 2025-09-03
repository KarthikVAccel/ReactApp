import { createSlice } from "@reduxjs/toolkit";

let intial = [{
    text: "Task",
    isComplete: false,
  }]
const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: intial,
  reducers: {
   add:(state,action)=>{
    state.push(action.payload) 
   },
   edit:(state,action)=>{
    state[action.payload.index].text = action.payload.text
   },
   setComplete:(state,action)=>{
    state[action.payload.index].isComplete = action.payload.isComplete
   },
   deleteTodo:(state,action)=>{
    state.splice(action.payload,1)
   }
  },
});

export const { add ,deleteTodo,edit,setComplete} = TodoSlice.actions;

export default TodoSlice.reducer;














