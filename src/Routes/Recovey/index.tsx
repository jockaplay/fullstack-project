import { IconContext } from "react-icons";
import Button from "../../components/Botton";
import Inputs from "../../components/Inputs";
import "../Login/login.css"
import { Link } from "react-router-dom"
import { BsPersonFill } from "react-icons/bs";

const Recovery = () => {
    return (
        <div className="card">
            <div className="card__header">
                <IconContext.Provider value={{ className: "card__icon" }}><BsPersonFill /></IconContext.Provider>
                <h1 className="card__long__name">Recovey Password</h1>
            </div>
            <form className="card__body">
                <section className="card__row">
                    <h2>Name</h2><Inputs pass={false} placeholder="Name" />
                </section>
                <section className="card__row">
                    <h2>New password</h2><Inputs pass={true} placeholder="New password" />
                </section>
                <Button name="Set password" />
                <Link className="card__link" to="/">Back</Link>
            </form>
        </div>
    );
}

export default Recovery;