import React from "react";
import "./inputs.css";

interface InputProps {
    placeholder: string;
    pass: boolean;
}

const Inputs: React.FC<InputProps> = ({placeholder, pass, ...props}) => {
    return (
        <input placeholder={placeholder} type={pass ? "password" : "text"}/>
    );
}

export default Inputs;