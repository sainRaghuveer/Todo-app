import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as counterReducer } from "../Redux/Counter/reducer";
import { reducer as todosReducer } from "../Redux/Todos/reducer";
import {reducer as AuthReducer } from "../Redux/Authentication/reducer"
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({counterReducer, todosReducer, AuthReducer})

const myMiddleWare = (store) => (next) => (action) =>{
    //store contains store object {getState, dispatch}
    //next :- dispatch
    //action :- whatever action component is dispatch
    if(typeof action === "function"){
        return action(store.dispatch)
    }
    return next(action);
}

const store = legacy_createStore(rootReducer, applyMiddleware(myMiddleWare))
// const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store;

//subscription