import React, { Component } from 'react';
import SideBar from './SideBar';
import {connect} from 'react-redux';
import{ handleShowUser } from '../../actions/userActios';
//const mql = window.matchMedia(`(min-width: 800px)`);

let datosRedux = false;


class Profile extends Component {
    state = {
      sidebarOpen: false
     }

     componentDidMount(){
      this.dataPerfil()
     }

      dataPerfil=()=>{      
      
      
       this.props.handleShowUser()

     }

     


    render() {
            
      const resultado = this.props.userId?true:false
      
        return (
  
  <React.Fragment>  
<div className="container-flux">
<SideBar/>
<div className="d-none" onChange={this.dataPerfil}>
  {resultado}
</div>
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

const mapStateToProps = state=>{  
  return {
    userId:state.userData.user._id,
    a:state.userData.user
  }
}

export default connect(mapStateToProps,{handleShowUser})( Profile);

