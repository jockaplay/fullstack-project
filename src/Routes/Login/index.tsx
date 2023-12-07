import { useState } from "react";
import { BsPersonFill } from "react-icons/bs"
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import Inputs from "../../components/Inputs";
import Button from "../../components/Botton";
import "./login.css"

const Login = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async () => {
        try {
            alert("login")
        } catch (error) {
            alert('Erro')
        }
    }

    return (
        <div className="card">
            <div className="card__header">
                <IconContext.Provider value={{className: "card__icon"}}><BsPersonFill/></IconContext.Provider>
                <h1>Your account</h1>
            </div>
            <form className="card__body">
                <section className="card__row">
                    <h2>Name</h2><Inputs onChange={(e) => setName(e.target.value)} pass={false} placeholder="Name"/>
                </section> 
                <section className="card__row">
                    <h2>Password</h2><Inputs onChange={(e) => setPassword(e.target.value)} pass={true} placeholder="Password"/>
                </section>
                <Button handleClick={handleClick} name="Login" />
                <section className="card__links__row">
                <Link className="card__link" to="/recovey">Forgot my password</Link><Link className="card__link" to="/new-account">Create account</Link>
                </section>
            </form>
        </div>
    );
}

export default Login;