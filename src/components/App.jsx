import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import Header from "./Header";
import Cart from "./Cart";
import Footer from "./Footer";

function App() {


  /////////////////////////////////////////////Item List////////////////////////////////////////////


  let item = {
    id: "",
    itemName: "",
    itemContent: "",
    itemCategory: "",
    price: "",
    imagesUrl: ["","",""],
  }
  let tempItems = [];
  item.id ='123';
  item.itemName = "Mahakaal T-Shirt";
  item.itemContent = "Lorem ipsum nhi dallunga bhai, it's so hard and long";
  item.Category = "T-Shirt";
  item.price = "549";
  item.imagesUrl = ["http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-03.jpg","http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-02.jpg","http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-01.jpg"];
  tempItems.push(item);
  tempItems.push(item);
  tempItems.push(item);
  tempItems.push(item);
  tempItems.push(item);
  tempItems.push(item);



  ///////////////////////////////////////////Item List ends////////////////////////////////////////////



  /////////////////////////////////////////////User DB//////////////////////////////////////////////////

  let user = {
    name: "",
    id: "",
    email: "",
    userName: "",
    passWord: "",
    phoneNo: "",
    cart: [],
    cardDetails: [],
    prevOrders: [],
    shippingAddres: []
  }


  /////////////////////////////////////////////User DB ends//////////////////////////////////////////////////




  //////////////////////////////////////////Cart DB Starts here///////////////////////////////////////
  const [cart,setCart] = useState([]);

  function cartAdd(id){
    console.log(cart);
    setCart([...cart, id]);
  }

  function cartRemove(id){
    console.log(cart);
    setCart(prevCart => {
      return prevCart.filter((cartItem,index) =>{
        return id !==cartItem;
      });
    });
  }

  





  //////////////////////////////////////////Cart DB Starts here///////////////////////////////////////


  // const [notes, setNotes] = useState([]);

  // function addNote(newNote) {
  //   setNotes(prevNotes => {
  //     return [...prevNotes, newNote];
  //   });
    
  // }

  // function deleteNote(id) {
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }
  //  <CreateArea onAdd={addNote} />
  //     {notes.map((noteItem, index) => {
  //       return (
  //         <Note
  //           key={index}
  //           id={index}
  //           title={noteItem.title}
  //           content={noteItem.content}
  //           onDelete={deleteNote}
  //         />
  //       );
  //     })}

  return (
    <div>
      <Header />
    {/* ////////////////////////////////////////Cart /////////////////////////////////////////////////////  */}
      {/* <div className="card">

      <div className = "container">
        <h1 className = "cartText">Cart</h1>
        <hr />
      </div>


      <Cart  id = "1"
        key = "1"
        url = "https://m.media-amazon.com/images/I/61VGYi4fkzL._AC_AA180_.jpg" 
        title = "Yeh item ka naam hoga" 
        content = "With supporting text below as a natural lead-in to additional content."
        price = "900.00"
        remove = {cartRemove}
      />

      <div className="container" >
            <h5 style ={{ display : "inline-block"}}>Subtotal ({cart.length} items):</h5>
            <h3 style ={{float: "right"}}>₹  900.00</h3>
      </div>
      </div> */}
      

    {/* ////////////////////////////////////////Cart /////////////////////////////////////////////////////  */}


    {/* ///////////////////////////////////// Card Starting /////////////////////////////////////////////   */}
      
      {/* <div className = "container">
        <div className = "row">
        {tempItems.map((items,index) => <div className = "col-lg-3 col-md-6"><Card
          key = {index}
          id = {index}
          price = {item.price}
          url = {item.imagesUrl}
          name = {items.itemName}
          content = {items.itemContent}
          remove = {cartRemove}
          add = {cartAdd}
        /></div>)}
        </div>
      </div> */}

      {/* //////////////////////////////// Card End ///////////////////////////////// */}

      

       <Footer /> 
    </div>
  );
}

export default App;
