import "./Botton.css"

type Iprops = {
    name: string,
    handleClick: () => Promise<void>,
}

const Button = (props: Iprops) => {
    return (
        <button onClick={props.handleClick} className="button">{props.name}</button>
    );
}

export default Button;