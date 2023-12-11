import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
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
        <main className="flex justify-center items-center w-[100vw] h-[100vh] bg-slate-50">
            <div className="flex-col w-[20rem]">
                <h1 className="text-center mb-5 font-bold">Sign-in</h1>
                <div>
                    <p>Email</p>
                    <input type="email" className="outline-none w-full bg-slate-300 rounded-lg p-2 focus:bg-slate-200" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" className="outline-none w-full bg-slate-300 rounded-lg p-2 focus:bg-slate-200" onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <button className="w-full bg-indigo-600 rounded-lg p-2 mt-6 text-white font-bold hover:bg-indigo-500 active:bg-indigo-400" onClick={() => post()}>Login</button>
            </div>
        </main>
    )
}

export default Login;