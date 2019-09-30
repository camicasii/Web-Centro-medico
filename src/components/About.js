import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class About extends Component {
    state = {  }
    componentDidMount(){
      //let intro = document.getElementById('fondo');
      //intro.className = "index"      
      
    }
    render() { 
        console.log("paso about");
        
        return (   
            <div className="viewf-block  " >
              
              <div className=" rgba-gradient d-flex justify-content-center align-items-center">
                
                <div className="container ">
                  
                  <div className="row">
                    
                    <div className="col-md-6  text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
                      <h1 className="h1-responsive font-weight-bold  mt-sm-5">Centro Medico san Carlos</h1>
                      <hr className=""/>
                      <h6 className="mb-4 font-weight-light text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi
                        fuga nesciunt
                        dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                        iste.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit magni architecto nesciunt blanditiis fuga, labore assumenda a mollitia beatae officiis error tempora. Sit similique suscipit modi, obcaecati culpa laudantium!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur laudantium reiciendis quae alias tempore vero, hic quia, atque sapiente error laboriosam necessitatibus earum repellendus, voluptatem quis enim mollitia aspernatur corporis!
                        </h6>
                        
                      
             <Link to='contact'>         <button className="btn btn-white btn-primary ml-lg-5">Contactanos</button></Link>
             <Link to=''> <button className="btn btn-outline-white btn-secondary ml-lg-5 ">Learn more</button></Link>
                      
                    </div>
                    
                    
                    
            
                  </div>
            
                </div>
            
              </div>
            
            </div>
            
         );
    }
}
 
export default About;