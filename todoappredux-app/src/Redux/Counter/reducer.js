import { localData } from "../../utils/accessLoacalStorage";
import { saveData } from "../../utils/accessLoacalStorage";
import { ADD, REDUCE } from "../Counter/actionTypes";


const initialState={
    counter: localData("count") || 0,
}


export const reducer=(state=initialState, {type, payload})=>{
    switch(type){

        //Counter
        case ADD:{
            saveData("count", state.counter+payload);
            return {...state, counter:state.counter+payload}
        }
        case REDUCE:{
            saveData("count", state.counter-payload);
            return {...state, counter:state.counter-payload}
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