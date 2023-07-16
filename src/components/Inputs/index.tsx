import React, { ComponentPropsWithoutRef } from "react";
import "./inputs.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
    placeholder: string;
    pass: boolean;
}

const Inputs: React.FC<InputProps> = ({placeholder, pass, ...props}) => {
    return (
        <input type={pass ? "password" : "text"} placeholder={placeholder} {...props}/>
    );
}

export default Inputs;