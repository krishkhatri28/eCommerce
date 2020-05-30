import React ,{useState} from "react";
import IconButton from '@material-ui/core/IconButton';

import "./css/cartcard.css"

function CartCard(props){
    function handleClick(){
        props.remove(props.id);
    }

    return(
    <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2">
                <img className="card-img" src = {props.url}></img>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                <h5 className= "item-heading">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1">
                    <div>        
                        <IconButton className="delButton delButton1" onClick={handleClick}>
                            <i className="fas fa-minus"></i>
                        </IconButton>
                        <p className="delButton price">₹  {props.price}</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default CartCard;