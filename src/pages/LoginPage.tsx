import React, {useContext, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default  function LoginPage(){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {login} = useContext(AuthContext);
    const  navigate = useNavigate()

    const logIn = (e:React.MouseEvent) =>{
        e.preventDefault();
        if(email.length!==0&&password.length!==0){
            login()
            navigate('/home')
        }
    }

    return (
        <div className='text-center'>
            <h4>Login</h4>
            <p>Email</p>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <p>Password</p>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <p></p>
            <button className='btn btn-outline-dark' onClick={(e)=>logIn(e)}>
                Log in
            </button>
        </div>
    )
}