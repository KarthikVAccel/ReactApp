import React,{useState} from "react";
import Button from '../../components/button'
import Paragraph from "../../components/paragraph";
import Input from "../../components/Input";
const Counter = () =>{

    let [count,setcount] = useState(0);

    return (
        <>
            <Paragraph text={count}>

            </Paragraph>

            <Button key={100} onClick={()=>{
                setcount(++count)
            }} text={"+"}>

            </Button>

            <Input inputFromProps={"text"} functionPassed={(e)=>{
                console.log("Event From Input",e.target.value)
            }}></Input>
            <Input inputFromProps={"email"} functionPassed={(e)=>{
                console.log("Event From Input",e.target.value)
            }}></Input>
            <Input inputFromProps={"number"} functionPassed={(e)=>{
                console.log("Event From Input",e.target.value)
            }}></Input>
             <Input inputFromProps={"date"} functionPassed={(e)=>{
                console.log("Event From Input",e.target.value)
            }}></Input>
        </>
    )
}

export default Counter