import { ADD, REDUCE } from "../Counter/actionTypes";

//Counter
export const addAction=(payload)=>{
    return(
        {type:ADD, payload}
    )
};

export const reduceAction=(payload)=>{
    return(
        {type:REDUCE, payload}
    )
};

