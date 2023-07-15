import "./inputs.css";

type Iprops = {
    pass: boolean,
    placeholder: string
}

const Inputs = (props: Iprops) => {
    return (
        <input placeholder={props.placeholder} type={props.pass ? "password" : "text"}/>
    );
}

export default Inputs;