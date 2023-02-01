import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, reduceAction } from "../Redux/Counter/action";


export const Counter=()=>{

    //importing store
    //getState()
    //subscriber

    const dispatch = useDispatch();

    const counter = useSelector((store)=>store.counterReducer.counter)
   
    const addHandler=()=>{
        //dispatch add action
        dispatch(addAction(1))
    }

    const reduceHandler=()=>{
        //dispatch reduce action
        dispatch(reduceAction(1))
    }

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={addHandler}>ADD</button>
            <button onClick={reduceHandler}>REDUCE</button>
        </div>
    )
}