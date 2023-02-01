import {GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_ERROR, POST_TODOS_REQUEST, POST_TODOS_SUCCESS} from "../Todos/actionTypes";




const initialState={
    todos:[],
    isLoading:false,
    isError:false,
}


export const reducer=(state=initialState, {type, payload})=>{
    switch(type){

        //GET todos
        case GET_TODOS_REQUEST:{
            return {...state, isLoading:true}
        }
        case GET_TODOS_SUCCESS:{
            return {...state, isLoading:false, todos:payload}
        }
        case GET_TODOS_ERROR:{
            return {...state, isLoading:false, isError:true}
        }

        //POST todos
        case POST_TODOS_REQUEST:{
            return {...state, isLoading:true}
        }
        case POST_TODOS_SUCCESS:{
            return {...state, isLoading:false, todos:[...state.todos, payload]}
        }
        case POST_TODOS_ERROR:{
            return {...state, isLoading:false, isError:false}
        }
        default:{
            return state;
        }
    }
}

/*
initial state of todos=[{1},{2},{3}]

after post request
payload={4}

[...state.todos, payload ]

new state=[{1},{2},{3},{4}]

*/