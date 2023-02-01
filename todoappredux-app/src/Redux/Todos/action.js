import {GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_ERROR, POST_TODOS_REQUEST, POST_TODOS_SUCCESS} from "../Todos/actionTypes";
import axios from "axios";

//GET todos

export const todoGetRequestAction=()=>{
    return {type:GET_TODOS_REQUEST};
}

export const todoGetSuccessAction=(payload)=>{
    return {type:GET_TODOS_SUCCESS,payload};
}

export const todoGetErrorAction=()=>{
    return {type:GET_TODOS_ERROR};
}


//POST todos
export const todoPostRequestAction=()=>{
    return {type:POST_TODOS_REQUEST};
}

export const todoPostSuccessAction=()=>{
    return {type:POST_TODOS_SUCCESS};
}

export const todoPostErrorAction=()=>{
    return {type:POST_TODOS_ERROR};
}

export const getTodo=(dispatch)=>{
    //request action
    dispatch(todoGetRequestAction());
    axios.get(`http://localhost:8080/todos`).then((res)=>{
        console.log("res",res);
        //Request Action
        dispatch(todoGetSuccessAction(res.data))
    }).catch((error)=>{
        //Failure Action
        dispatch(todoGetErrorAction())
    })
}



export const postTodo=(title)=> (dispatch)=> {
    //request
   
    if(title){
        let newTodo={
            title:title,
            status:false
        }
        dispatch(todoPostRequestAction())
        return axios.post(`http://localhost:8080/todos`,newTodo).then(()=>{     //SUCCESS
        dispatch(todoPostSuccessAction())
                // console.log("PostRES",res)
        }).catch((error)=>{
            //error
            dispatch(todoPostErrorAction())
            console.log("error",error)
        })
    }
}