import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { todoGetErrorAction, todoGetRequestAction, todoGetSuccessAction, todoPostErrorAction, todoPostRequestAction, todoPostSuccessAction } from "../Redux/Todos/action";
import TodoInput from "./TodoInput";
import { getTodo } from "../Redux/Todos/action";
export default function TodoList(){

    const dispatch = useDispatch();

    // =>we can use useSelector either this way<=
    // let todos=useSelector((store)=>{
    //     console.log("storeTodo", store)
    //     return store.todos;
    // });
    // let isLoading=useSelector(store=>store.isLoading)

    // =>or this way<=
    let {todos, isLoading, isError}=useSelector((store)=>{
        return {
            todos:store.todosReducer.todos,
            isLoading:store.todosReducer.isLoading,
            isError:store.todosReducer.isError
        }
    },shallowEqual)

    useEffect(()=>{
        console.log("store",todos)
        dispatch(getTodo);
    },[]);

    console.log("todos", todos)
    //every post request i have to make get request

    return isLoading ? (<h1>Loading...</h1>):(
        <div>
            <h1>TODO APP</h1>
            <TodoInput/>
            {isLoading && <h1>Loading...</h1>}
            {isError && <h3 style={{color:"red"}}>Some error while fetching data</h3>}
            { todos.length > 0 && todos.map((el)=>{
                return(
                   <div key={el.id}>
                    {el.title}---- {el.status ? "TRUE": "FALSE"}
                   </div>
                )
            })}
        
        </div>
    )
}