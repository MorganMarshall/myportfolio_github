import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from "react-router-dom";

import M from 'materialize-css'
class Header extends Component {


  goBack() {
     
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.getInstance(elem);
    instance.close();
  }
  
render() {

    return (

        <header>

<div data-aos="slide-down" data-aos-duration="1250" data-aos-delay="1800" className="navbar-fixed">
  <nav>
    <div className="nav-wrapper indigo darken-3 z-depth-3">
    <Link to="/" className="myLogo">  <a href="/"  className="brand-logo grey-text text-lighten-3">M</a></Link>
    
     <Link to="/"> <a  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a></Link>

      <ul style={{paddingRight: '11px'}} className="right hide-on-med-and-down">
        <li><Link to="/" className="grey-text text-lighten-3">Home</Link></li>
        <li><Link to="/Work" className="grey-text text-lighten-3">Work</Link></li>
        <li><Link to="/Contact" className="grey-text text-lighten-3">Contact</Link></li>
      </ul>
    </div>
  </nav>
</div>

  <ul className="sidenav grey darken-2" id="mobile-demo">
    <nav className="indigo">
    <Link to="/Home">  <a className="brand-logo grey-text text-lighten-3 mTwo">M</a></Link>
    </nav>
    <br/>
    <li><Link to="/" onClick={this.goBack}  className="grey-text text-lighten-3">Home</Link></li>
        <li><Link onClick={this.goBack}  to="/Work" className="grey-text text-lighten-3">Work</Link></li>
        <li><Link to="/Contact" onClick={this.goBack}  className="grey-text text-lighten-3">Contact</Link></li>

  </ul>

     
       
      </header>
    );

}
componentDidMount() {
  
    M.AutoInit();
   
      AOS.init();
 
  }
   
}

export default Header;