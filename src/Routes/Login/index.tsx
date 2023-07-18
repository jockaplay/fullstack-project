import Inputs from "../../components/Inputs";
import { BsPersonFill } from "react-icons/bs"
import "./login.css"
import { IconContext } from "react-icons";
import Button from "../../components/Botton";
import { Link } from "react-router-dom";

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
                <Link className="card__link" to="/recovey">Forgot my password</Link><Link className="card__link" to="/new-account">Create account</Link>
                </section>
            </form>
        </div>
    );
}

export default Login;