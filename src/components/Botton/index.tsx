import "./Botton.css"

type Iprops = {
    name: string,
}

const Button = (props: Iprops) => {
    return (
        <button className="button" type="submit">{props.name}</button>
    );
}

export default Button;