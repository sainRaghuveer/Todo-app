import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../Components/TodoList";
import { loginFailureAction, loginRequestAction, loginSuccessAction } from "../Redux/Authentication/action";

const HomePage=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isAuth = useSelector((store)=>{
        return store.AuthReducer.isAuth
    })

    let dispatch = useDispatch();

    const handleLogin = () => {
        let userData={
            email:email,
            password:password,
        }
        dispatch(loginRequestAction());
        axios.post(`https://reqres.in/api/login`, userData).then((res)=>{
            dispatch(loginSuccessAction(res.data.token));
            console.log(res.data.token)
        }).catch((error)=>{
            dispatch(loginFailureAction());
            console.log("error",error)
        });
    }

    return(
        <div>
            <h1>HOME PAGE</h1>
            <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Submit</button>
            {isAuth && <TodoList/>}
        </div>
    )
}

export default HomePage;