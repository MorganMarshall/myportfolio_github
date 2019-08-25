import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return(
            <div data-aos-once="true" data-aos="fade" data-aos-duration="1250" data-aos-delay="2600">
            
            <br/>
            <footer className="page-footer indigo darken-4 z-depth-3">
              <div style={{paddingBottom: '4px'}} className="container center">
                
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/morgan-marshall-837882a9/" className="fa fa-linkedin z-depth-3"></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/MorganMarshall" className="fa fa-github z-depth-3"></a>
               
              </div>
            <div style={{paddingBottom: '2px'}} className="center">
            <div className="ftrtext" >imorganmarshall@gmail.com</div>
                <div className="ftrtext">Created with <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/react">React.js</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/ReactTraining/react-router">React Router</a></div>
                </div>
             
            </footer>
            </div>
          
        )
    }
}

export default Footer