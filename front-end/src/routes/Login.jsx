import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import apiFetch from '../axios/config';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const user = {
        email: email,
        pass: senha
    }

    const post = async() => {
        await apiFetch.post("/auth/login", user)
        navigate("/")
    }

    return (
        <div>
            <p>Email</p>
            <input onChange={(e) => setEmail(e.target.value)}/>
            <p>Password</p>
            <input onChange={(e) => setSenha(e.target.value)}/>
            <button onClick={() => post()}>Login</button>
        </div>
    )
}

export default Login;