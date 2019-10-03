import React from 'react';
import { Link } from 'react-router-dom';

//Redux
import { connect  } from  'react-redux';
import {handleSingOut} from '../../actions/singActions'

const SingOptions =(props)=> {    
    console.log(props);
    
    return ( 
        props.succes ?
    <React.Fragment>
        <li className="nav-item">        
        <Link to='/'> <button type="button" onClick={props.handleSingOut}
        className="btn btn-info btn-rounded btn-lg p-1">SingOut
        <i className="fas fa-sign-in-alt fa-sm ml-2" aria-hidden="true"></i></button></Link>
        </li>
    </React.Fragment>:
        <React.Fragment>
        <li className="nav-item">        
        <Link to='/SingUp'><button type="button" className="btn btn-info btn-rounded btn-lg p-1">SingUp
        <i className="fas fa-sign-in-alt fa-sm ml-2" aria-hidden="true"></i></button>     </Link>   
      </li>

       <li className="nav-item">        
       <Link to='/SingIn'><button type="button" className="btn btn-info btn-rounded btn-lg p-1">SingIn
        <i className="fas fa-sign-in-alt fa-sm ml-2" aria-hidden="true"></i></button></Link>
        </li>
    </React.Fragment>
     );
} 
const mapStateToProps =(state)=>{
    return {
      succes : state.userData.succes
    }
 }
 export default connect(mapStateToProps,{handleSingOut})(SingOptions);

