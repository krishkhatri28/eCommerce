import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Header from "./Header";
import Cart from "./Cart";
import Footer from "./Footer";
import Login from "./Login";

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
