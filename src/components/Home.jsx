import React, { useState } from "react";
import Card from './Card';


function Home(props) {

  let item = {
    id: "",
    itemName: "",
    itemContent: "",
    itemCategory: "",
    price: "",
    imagesUrl: ["", "", ""],
  }
  let tempItems = [];
  item.id = '123';
  item.itemName = "Mahakaal T-Shirt";
  item.itemContent = "Lorem ipsum nhi dallunga bhai, it's so hard and long";
  item.Category = "T-Shirt";
  item.price = "549";
  item.imagesUrl = ["http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-03.jpg", "http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-02.jpg", "http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-01.jpg"];
  tempItems.push(item);
  tempItems.push(item);
  tempItems.push(item);
  tempItems.push(item);
  tempItems.push(item);
  tempItems.push(item);

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
      <div className="card-body">
        <div className="container">
          <div className="row">
            {tempItems.map((items, index) => <div className="col-lg-3 col-md-6"><Card
              key={index}
              id={index}
              price={item.price}
              url={item.imagesUrl}
              name={items.itemName}
              content={items.itemContent}
              remove={cartRemove}
              add={cartAdd}
            /></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
