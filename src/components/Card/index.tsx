import React from "react";
import "./card.css"

type Iprops = {
    children: React.ReactNode;
}

const Card = (props: Iprops) => {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}

export default Card;