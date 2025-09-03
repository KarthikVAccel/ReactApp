import React from "react";
import { increment,decrement,reset } from "../../redux/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterSlice.value);

  return (
    <div>
      <p>counter {`===> ${counter}`}</p>
      <button onClick={()=>{
        dispatch(increment())
      }}>increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>decrement</button>
      <button onClick={()=>{
        dispatch(reset())
      }}>reset</button>
    </div>
  );
};

export default App;
