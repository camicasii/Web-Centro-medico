import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import SingOptions from './Sing';

class Navbar extends Component {
  state = { sing:false }
  render() { 
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light  scrolling-navbar">  
        
          <Link to="/"><span href="none" className="navbar-brand">Centro medico</span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">    
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to='/'><span className="nav-link">Home <span className="sr-only">(current)</span></span></NavLink>
              </li>

              <li className="nav-item">
                  <NavLink to={'/about'}><span className="nav-link">About</span></NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="none" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Servicios
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to='/servicios/1'><span className="dropdown-item" href="none">Cardiologia</span></Link>
                  <Link to='/servicios/2'><span className="dropdown-item" href="none">Pediatria</span></Link>
                  <Link to='/servicios/3'><span className="dropdown-item" href="none">Odontologia</span>         </Link> 
                  <Link to='/servicios/4'><span className="dropdown-item" href="none">Traumatologia</span></Link>
                  <Link to='/servicios/5'><span className="dropdown-item" href="none">Ginecologia</span></Link>
                  <div className="dropdown-divider"></div>
                  <Link to='/servicios/6'><span className="dropdown-item" href="none">Mas Servicios aqui</span></Link>
                </div>
              </li>
              <li className="nav-item">
              <Link to='/contact'><span className="nav-link" href="none">Contacto</span></Link>
              </li>
              <SingOptions/>
            </ul>
        </div>
      </nav>
     );
  }
}
 
export default  Navbar;