import React, { useState, useEffect } from "react";
import Button from "../../components/button";
import Paragraph from "../../components/paragraph";
import Input from "../../components/Input";
import { useSelector,useDispatch } from "react-redux";
import { add,edit,deleteTodo,setComplete } from "../../redux/slices/todoSlice";
const Todo = () => {
let [to, setTo] = useState([]);
  let [isEdit, setEdit] = useState(false);
  let [index, setIndex] = useState(null);
  let [editValue, setEditValue] = useState(null);
  let todo = useSelector(state=>state.todoSlice)
  let intialState = {
    text: "Task",
    isComplete: false,
  };
  let dispatch = useDispatch()
  return (
    <>
      {todo.map((item, key) => {
        return <>
          <Input
            checked={item.isComplete}
            functionPassed={(e) => {
              let v = to;
              v[key] = e.target.checked;
              setTo([...v]);
            }}
            inputTypeFromProps={"checkbox"}
          ></Input>
          <br />
          <Paragraph
            onclick={() => {
              setIndex(key);
              setEdit(true);
            }}
            text={item.text}
          ></Paragraph>
        </>;
      })}
      <Button
        onClick={() => {
          // let v = to;
          // v.push(intialState);
          // setTo([...v]);
          dispatch(add(intialState))
        }}
        text ={"Add"}
      ></Button>
      {isEdit ? (
        <>
          {" "}
          <Paragraph text={"Edit"}></Paragraph>
          <Input
            functionPassed={(e) => {
              setEditValue(e.target.value);
            }}
            inputTypeFromProps={"text"}
          ></Input>
          <Button
            text={"Save"}
            onClick={() => {
              if (editValue) {
                // let v = to;
                // v[index].text = editValue;
                // setTo([...v]);
                setEdit(false);
                setEditValue(null);
                dispatch(edit({
                  index:index,text:editValue
                }))
              }
            }}
          ></Button>
        </>
      ) : null}
    </>
  );
};

export default Todo;
