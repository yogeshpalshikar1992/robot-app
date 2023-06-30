import Card from "./Card";
import React from "react";

const CardList = ({robots}) => {
    const cardArray = robots.map(
        (user, i) => {
            return <Card key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}              
            />
        }
    )
    return (
    <div>
        <React.StrictMode>
            {cardArray}
        </React.StrictMode>
    </div>
    )
}

export default CardList;