import Inputs from "../Inputs";
import { BsPersonFill } from "react-icons/bs"
import "./login.css"
import { IconContext } from "react-icons";
import Button from "../Botton";

const Login = () => {
    return (
        <div className="card">
            <div className="card__header">
                <IconContext.Provider value={{className: "card__icon"}}><BsPersonFill/></IconContext.Provider>
                <h1>Your account</h1>
            </div>
            <form className="card__body">
                <section className="card__row">
                    <h2>Name</h2><Inputs pass={false} placeholder="Name"/>
                </section>
                <section className="card__row">
                    <h2>Password</h2><Inputs pass={true} placeholder="Password"/>
                </section>
                <Button name="Login" />
                <section className="card__links__row">
                <a className="card__link" href="#">Forgot my password</a><a className="card__link" href="#">Create account</a>
                </section>
            </form>
        </div>
    );
}

export default Login;