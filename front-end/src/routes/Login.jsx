import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    // Adicionar axios

    return (
        <div>
            <p>Login</p>
            <input onChange={(e) => setEmail(e.target.value)}/>
            <p>Senha</p>
            <input onChange={(e) => setEmail(e.target.value)}/>
        </div>
    )
}

export default Login;