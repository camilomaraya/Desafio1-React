import React from "react";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
    return (
        <div className="carta ">
            <Card>
                <Card.Img src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">
                        {props.type}
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;