import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { getTodo, postTodo } from "../Redux/Todos/action";

export default function TodoInput(){

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler=()=>{
        dispatch(postTodo(text)).then(()=>dispatch(getTodo));
        setText("");
    }
    //console.log("text",text)
    
    return(
        <div>
            <input type="text" value={text} onChange={(e)=>(setText(e.target.value))} placeholder="Enter Todos"/>
            <button onClick={addTodoHandler}>ADD Todo</button>
        </div>
    )
}