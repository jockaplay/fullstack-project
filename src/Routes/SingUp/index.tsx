import Inputs from "../../components/Inputs";
import { BsPersonFill } from "react-icons/bs"
import { IconContext } from "react-icons";
import Button from "../../components/Botton";
import Progress from "../../components/Progress";
import "../Login/login.css"
import { useState } from "react";

const SingUp = () => {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className="card">
            <Progress/>
            <div className="card__header">
                <IconContext.Provider value={{className: "card__icon"}}><BsPersonFill/></IconContext.Provider>
                <h1>Create account</h1>
            </div>
            <form className="card__body">
                <section className="card__row">
                    <h2>Name</h2><Inputs pass={false} placeholder="Name"/>
                </section>
                <section className="card__row">
                    <h2>Password</h2><Inputs pass={true} placeholder="Password"/>
                </section>
                <section className="card__warning">
                    <p>Your password must contains: 8 characters and numbers</p>
                </section>
                <section className="card__row">
                    <h2>Confirm</h2><Inputs pass={true} placeholder="Password"/>
                </section>
                <section className="card__warning">
                    <p>Passwords not match</p>
                </section>
                <Button name="Sing Up" />
                <section className="card__links__row -center">
                <a className="card__link" href="#">Back</a>
                </section>
            </form>
        </div>
    );
}

export default SingUp;

function verifyLogin(value: string){
    const regex = /^(?=.*[a-zA-Z])(?=.*d).{8,}$/
    if (regex.test(value)){
        console.log("Match");
    } else {
        console.log(value);
    }
}