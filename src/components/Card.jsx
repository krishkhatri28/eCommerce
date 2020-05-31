import React, { useState } from "react";

import "./css/card.css"

function Card(props) {
    const [check, setCheck] = useState(false);
    const [cor, setCor] = useState("");

    function handleClick(event) {
        event.preventDefault();
        if (check === false) {
            props.add(props.id);
            setCheck(true);
        }
        else {
            props.remove(props.id);
            setCheck(false);
        }
    }
    function handleIn() {

    }


    return (
        <div className="card note2">
            <div id="myCarousel" className="carousel slide" data-pause="false" data-interval="500" onMouseOver={handleIn}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={props.url[0]} alt="First pic" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.url[1]} alt="Second pic" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.url[2]} alt="Third pic" />
                    </div>
                </div>
            </div>

            <div className="card-body">
                <h6 className="card-title cardTitle">{props.name}</h6>
                <h6 className="card-price">₹{props.price}</h6>
                <p className="card-text">{props.content}
                    <a href="" onClick={handleClick}><i className={`${check ? "fa" : "far"} heart fa-heart fa-lg`} /></a>
                </p>
            </div>
        </div>
    );
}

export default Card;
