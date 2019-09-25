import React from 'react';
import { Link } from 'react-router-dom';

const SingOptions =(props)=> {    
    return ( 
        props.sing ?
        <React.Fragment>
        <li className="nav-item">        
        <Link to='/SingUp'><button type="button" className="btn btn-info btn-rounded btn-lg p-1">SingUp
        <i className="fas fa-sign-in-alt fa-sm ml-2" aria-hidden="true"></i></button>     </Link>   
      </li>

       <li className="nav-item">        
       <Link to='/SingIn'><button type="button" className="btn btn-info btn-rounded btn-lg p-1">SingIn
        <i className="fas fa-sign-in-alt fa-sm ml-2" aria-hidden="true"></i></button></Link>
        </li>
    </React.Fragment>:
    <React.Fragment>
        <li className="nav-item">        
        <Link to='/'> <button type="button" className="btn btn-info btn-rounded btn-lg p-1">SingOut
        <i className="fas fa-sign-in-alt fa-sm ml-2" aria-hidden="true"></i></button></Link>
        </li>
    </React.Fragment>
     );
} 
export default SingOptions;

