import React from 'react';
import { Link  } from 'react-router-dom';

const SideBar = (props) => {
    return ( 
    <div id="sidebar" className="">
    <ul className="custom-scrollbar tips" >
        <li>
          <div className="logo-conten">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                className="rounded-circle logo-sider mb-1 pt-3" alt="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"/>
                <span className="text-success d-block">AnnaDeynah</span>
          </div>
        </li>
        <li className="bg-white">
          <hr/>
        </li>
    
    
        <li className="justinfy-content-end">
          <ul className="tip-menu ">
          <li  id= "casa"> 
             <Link to='/profile/cita'> <span className="side-A"> Solicitar citas
              <i className="fa fa-chevron-right"></i></span></Link>
          </li>
          <li id= "casa">
          <Link to='/profile/showcita'><span  className="side-A"> Mostral Citas
              <i className="fa fa-chevron-right"></i></span></Link>
          </li>
          <li id= "casa">
          <Link to='/profile/edit'><span className="side-A"> Editar perfil
              <i className="fa fa-chevron-right"></i></span></Link>
          </li>
          <li id= "casa">
          <Link to='/profile/Tips'><span className="side-A"> Tips Medicos
              <i className="fa fa-chevron-right"></i></span></Link>
          </li>
          </ul>
        </li>
    </ul>
    </div>
     );
}
 
export default SideBar;