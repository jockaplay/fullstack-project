import Inputs from "../../components/Inputs";
import { BsPersonFill } from "react-icons/bs"
import { IconContext } from "react-icons";
import Button from "../../components/Botton";
import Progress from "../../components/Progress";
import "../Login/login.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

    // const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className="card">
            <Progress/>
            <div className="card__header">
                <IconContext.Provider value={{className: "card__icon"}}><BsPersonFill/></IconContext.Provider>
                <h1>Create account</h1>
            </div>
            <form className="card__body">
                <section id="create_login" className="card__warning">
                    <p>8 characters</p>
                </section>
                <section className="card__row">
                    <h2>Name</h2><Inputs pass={false} onChange={(value) => {verifyLogin(value.target.value)}} placeholder="Name"/>
                </section>
                <section id="create_pass" className="card__warning">
                    <p>8 characters and numbers</p>
                </section>
                <section className="card__row">
                    <h2>Password</h2><Inputs onChange={(value) => {verifyPass(value.target.value); setPass(value.target.value)}} pass={true} placeholder="Password"/>
                </section>
                <section id="create_pass_confirm" className="card__warning">
                    <p>Passwords not match</p>
                </section>
                <section className="card__row">
                    <h2>Confirm</h2><Inputs onChange={(value) => confirmPass(value.target.value, pass)} pass={true} placeholder="Password"/>
                </section>
                <Button name="Sign Up" />
                <section className="card__links__row -center">
                <Link className="card__link" to="/">Back</Link>
                </section>
            </form>
        </div>
    );
}

export default SignUp;

function verifyLogin(value: string){
    const regex = /^(?=.*[a-zA-Z]).{8,}$/;
    const login = document.getElementById("create_login");
    verify(value, login, regex);
}

function verifyPass(value: string){
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    const pass = document.getElementById("create_pass");
    verify(value, pass, regex);
}

function confirmPass(value: string, pass: string){
    const pass2 = document.getElementById("create_pass_confirm");
    if (value.length < 1) {
        pass2?.classList.remove("--show");
    } else if (value == pass){
        pass2?.classList.remove("--show");
    } else {
        pass2?.classList.add("--show");
    }
}

function verify(value:string, campo:HTMLElement | null, regra:RegExp) {
    if (value.length < 1) {
        campo?.classList.remove("--show");
    } else if (regra.test(value)){
        campo?.classList.remove("--show");
    } else {
        campo?.classList.add("--show");
    }
}