import React, { Component } from "react";
import Footer from './Footer'
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";
import "./App.css";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Header from "./Header";
import { Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App grey darken-3">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route path="/Work" component={Work} />
        <Route path="/Contact" component={Contact} />
        <Footer />
      </div>
    );
  }
}

export default App;
