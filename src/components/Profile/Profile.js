import React, { Component } from 'react';
import SideBar from './SideBar';
const mql = window.matchMedia(`(min-width: 800px)`);

class Profile extends Component {
    state = {
        sidebarDocked: mql.matches,
      sidebarOpen: false
     }

     onSetSidebarOpen=(e)=> {
         console.log("opasasd");

        e.preventDefault();
        const a = document.getElementById('wrapper')
        a.classList.toggle("myMenu")


      }

      mediaQueryChanged=()=> {
        console.log("chage");
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
      }




    render() {
        return (
  
  <React.Fragment>
<div className="container-flux">
<SideBar/>

<div className="page-ware ">             
<div className="container page-ware-content ">
<div className="row">
  <div className="col-md-6  order-sm-3 p-3">
    <div className="card">
      <div className="card-body">
        sadfasfasdfas
        asdf
        asdf
        asdfasdfsdaf
        sadf
      </div>
    </div>
  </div>
  <div className="col-md-6  p-3 col  order-sm-1">
    <div className="card">
      <div className="card-body">
        sadfasfasdfas
        asdf
        asdf
        Hola
        
        sadf
      </div>
    </div>
  </div>
</div>
</div>
</div>
  


  </div>


                          </React.Fragment>

         );
    }
}

export default Profile;

