import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="container">
                
                    <div className="mb-4">

                    <div className="row">
                    <div className="col-md-12 d-block">

                    <h2 className="h1-responsive font-weight-bold text-center my-4 ">Contact us</h2>

                    <p className="text-center w-responsive mx-auto mb-5 d-block">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
                    </div>                   
                    </div>

                    <div className="row ">
                    
                        <div className="col-md-6 ">
                            <div className="card">
                                <div className="card-body  mx-md-4">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                        
                                        <div className="row">
                                            <div className="col-md-6 ">
                                                <div className="md-form mb-0">
                                                    <input type="text" id="name" name="name" className="form-control"/>
                                                    <label for="name" className="">Your name</label>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <input type="text" id="email" name="email" className="form-control"/>
                                                    <label for="email" className="">Your email</label>
                                                </div>
                                            </div>                                        

                                        </div>                                      

                                        
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form mb-0">
                                                    <input type="text" id="subject" name="subject" className="form-control"/>
                                                    <label for="subject" className="">Subject</label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row ">                                        
                                            <div className="col-md-12">
                                                <div className="md-form">
                                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                                    <label for="message">Your message</label>
                                                </div>
                                            </div>
                                        </div>
                                            
                                        <div className="col-md-11 ">
                                            <div className="text-center ">
                                                <button className="btn  btn-primary ">Send</button>                                
                                            </div>
                                        </div>

                                    </form>
                                </div>                                
                            </div>                            
                        </div>      
                        <div className="col-md-5">
                        // eslint-disable-next-lin
                            <img  className="img-fluid" src="https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_960_720.jpg" alt="https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_960_720.jpg" alt='dfgsdfg'/>                    
                        </div>
                        </div>
                     </div>
                    
                                         
                            
                        </div>
                        <div className="row d-flex justify-content-around" >
                                    <div className="text-center ">
                                        <i className="fas fa-map-marker-alt mt-4 fa-2x"></i>
                                        <p>San Francisco, CA 94126, USA</p>
                                    </div>
                                    <div className="text-center">
                                        <i className="fas fa-phone mt-4 fa-2x"></i>
                                        <p>+ 01 234 567 89</p>
                                    </div>
                                    <div className="col-md-3 text-center">
                                         <i className="fas fa-envelope mt-4 fa-2x"></i>
                                        <p>contact@mdbootstrap.com</p>
                                    </div>
            
                                </div>      
                                </React.Fragment>
                    
                        
                    







          );
    }
}
 
export default Contact;

/**
 * 
 */