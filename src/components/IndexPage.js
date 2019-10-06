import React, { Component } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

class IndexPage extends Component {
    state = {  }
    componentDidMount(){
 /*  setTimeout(() => {
    this.getAlert();
   }, 2000); */
  //let intro = document.getElementById('fondo');
  //   intro.className = "fondo"
  //   console.log(intro.className);
    }

    getAlert=()=>{
      console.log(("alert"));
      
      return(
        Swal.fire({
          title: 'Resgistrate y Recive un Cupon de descuento',
          animation: false,
          customClass: {
            popup: 'animated tada'
          }
        })
      )
    }
    
    
    render() { 
      
        console.log("paso IndexPage");
        
        return (   
            
                <div className="view " >              
                
                    <div className=" justify-content-center align-items-center">

                    <div className="container mt-md-5">        
        <div className="row wow fadeIn">

                    <div className="col-md-12 text-center">
            <h1 className="display-4 font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInUp">
            
            Centro Medico San Carlos</h1>
            <h5 className="pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 wow fadeInUp" data-wow-delay="0.2s">
              Una vida de salud y vienestar es posible, nosotros te ayudamos con eso
              </h5>
              
            <div className="wow fadeInUp" data-wow-delay="0.4s">
              <Link to='/SingUp'><button className="btn btn-purple btn-rounded"><i className="fas fa-user left"></i> Sign up!</button></Link>
              <Link to='/about'><button className="btn btn-outline-purple btn-rounded"><i className="fas fa-book left"></i> Conocenos</button></Link>              <div className="row d-flex justify-content-center align-items-center">
                Recive un Cupon de descuento resgistrandote ahora
              </div>
              
            </div>
          </div>
                    </div>
                </div>
            </div>

</div>
            
            
         );
    }
}
 
export default IndexPage;