import Inputs from "../Inputs";
import { BsPersonFill } from "react-icons/bs"
import "./card.css"
import { IconContext } from "react-icons";

const Card = () => {
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
                <button className="card__submit" type="submit">Login</button>
                <a className="card__link" href="#">Forgot my password</a>
            </form>
        </div>
    );
}

export default Card;