import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
<div>
<br/>   
            <div data-aos="fade" data-aos-duration="600"   class="container">
           
              <div class="card grey darken-4 z-depth-5">
            <div class="container white-text">
            <br/>

<h4 class="white-text center">Contact</h4>
<br/>
<br/>
<br/>
<br/>

<div style={{paddingBottom: '4px'}} class="center">
<form  method="post" action="https://formspree.io/imorganmarshall@gmail.com">
      <div class="form-group container">
        <label for="exampleFormControlInput1">Name</label>
        <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
        <br/>
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="email@example.com"/>
        <br/><br/>
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
        <br/><br/>
        <button type="submit" class="btn blue darken-4">Submit</button>

      </div>
    </form>
    </div>


<br/><br/><br/><br/><br/><br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


</div>
</div>
</div>
</div>

        )
    }
}

export default Contact