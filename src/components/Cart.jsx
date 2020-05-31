import React, { useState } from "react";
import Cartitem from './Cartitem';

import "./css/cartcard.css"

function CartCard(props) {
    const [cart, setCart] = useState([]);

    function cartAdd(id) {
        console.log(cart);
        setCart([...cart, id]);
    }

    function cartRemove(id) {
        console.log(cart);
        setCart(prevCart => {
            return prevCart.filter((cartItem, index) => {
                return id !== cartItem;
            });
        });
    }

    return (
        <div className="card">

            <div className="container">
                <h1 className="cartText">Cart</h1>
                <hr />
            </div>


            <Cartitem id="1"
                key="1"
                url="https://m.media-amazon.com/images/I/61VGYi4fkzL._AC_AA180_.jpg"
                title="Yeh item ka naam hoga"
                content="With supporting text below as a natural lead-in to additional content."
                price="900.00"
                remove={cartRemove}
            />

            <div className="container" >
                <h5 style={{ display: "inline-block" }}>Subtotal ({cart.length} items):</h5>
                <h3 style={{ float: "right" }}>₹  900.00</h3>
            </div>
        </div>
    );
}

export default CartCard;