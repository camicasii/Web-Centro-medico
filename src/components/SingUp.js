import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingOut extends Component {
    state = {  }
    usernameRef=React.createRef()
    passwordRef=React.createRef()

    handlegetSingUp=(e)=>{
      e.preventDefault();
      const data = {
        username:this.usernameRef.current.value,
        password:this.passwordRef.current.value
      }
      console.log(data);
      

    }
    render() { 
        return (
            <div className="container">          
          <div className="row">
            
            <div className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
                <h1 className="h1-responsive font-weight-bold mt-sm-5">SingOut </h1>
                <hr className="hr-light"/>
                <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi
                    fuga nesciunt
                    dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                    iste.</h6>
                    <Link to='/SingIn'>   <button className="btn btn-outline-white">Ingresa Ahora</button></Link>
            </div>
            
            <div className="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight" data-wow-delay="0.3s">
              
              <div className="card">
                  <div className="card-body">
                  <form>
                    <div className="md-form mt-md-4">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={this.usernameRef}  autoComplete="username email"/>
                        <label forhtlm="exampleInputEmail1">Email address</label>                        
                    </div>
                    <div className="md-form mt-md-4">                        
                        <input type="password" className="mt-md-5 form-control" id="exampleInputPassword1" ref={this.passwordRef} autoComplete="current-password"/>
                        <label forhtlm="exampleInputPassword1">Password</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" forhtlm="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" onClick={this.handlegetSingUp} className="btn btn-primary btn-block">Submit</button>
                </form>
                  </div>
              </div>
              
              
            </div>
          
          </div>
          
        </div>



          );
    }
}
 
export default SingOut;