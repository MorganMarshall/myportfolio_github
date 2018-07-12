import React, { Component } from "react";
import logo from "./roundpic.jpg";

class Home extends Component {

  render() {

  

    return (
      
  <div className="container">
  <br/>
    <div className="card grey darken-4 z-depth-5">
      <br/>
      <main id="maincode">
        <div style={{paddingLeft: '8%' }}>
          <br/>
          <img id="profilepic" className="circle responsive-img z-depth-2" alt="morgan" src={logo}/>
        </div>
        <br/>
        <h5 className="center container grey-text text-lighten-2">
        Morgan Marshall, Web Developer
      </h5>
        <br/>
       
        <div className="card-image">
          <span className="card-title"></span>
        </div>
        <div className="card-content grey-text text-lighten-3">
          <p id="summary" className="center">Hi, I'm Morgan, a passionate developer and father. I enjoy building cool stuff and working with Ableton Live on occasion. Learning a bit of visual basic in elementary school, which most people haven't even heard of, would spark a seed that wouldn't manifest itself for many years. Spending a great deal of my career as a hardware technician I didn't touch any code again until only a few years ago.
          </p>
          <br/>
          <br/>
          <br/>
         
          <p className="center"> "...the bamboo survives by bending with the wind."</p>
          <div className="center">-Bruce Lee</div>
          <br/><br/><br/><br/><br/><br/><br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </main>
    </div>
  </div>

   
     
    );
  }
}

export default Home;
