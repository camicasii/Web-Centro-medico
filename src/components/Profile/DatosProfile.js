import React, { Component } from 'react';

import {connect  } from 'react-redux';

import { handleIsSingInToken } from  '../../actions/singActions';
import{handleSingFirst} from '../../actions/userActios'

class DatosProfile extends Component {
    state = {  }
        nombreRef = React.createRef();
        apellidoRef = React.createRef();
        dateRef = React.createRef();
        emailRef = React.createRef();
        telefono = React.createRef();
        dni = React.createRef();
        adressRef = React.createRef();
        generoRef = React.createRef();

        componentDidMount(){
            this.props.handleIsSingInToken()
            console.log();
            
        }
        componentWillReceiveProps(){
            console.log("willmount");
            
        }
        submin=(e)=>{
            e.preventDefault()
            const data={
                firstName:this.nombreRef.current.value,
                lastName:this.apellidoRef.current.value,
                age:this.dateRef.current.value,
                email:this.emailRef.current.value,
                phone:this.telefono.current.value,                
                direction:this.adressRef.current.value,
                dni:this.dni.current.value,
                genero:this.generoRef.current.value,
                user:this.props.userId

            }
            console.log(data);
            this.props.handleSingFirst(data);
            
           
            
            
        }
    render() { 
        console.log("my",this.props.userId);
        console.log("my")
        
        
        return ( 
            <React.Fragment>
{this.props.userId}
 <div className="row  justify-content-center pt-5">
                    
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body  mx-md-4">
                                <form id="contact-form" name="contact-form" >
                                    
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="md-form mb-0">
                                                <input type="text" id="name"  className="form-control"  ref={this.nombreRef} />
                                                <label htmlFor="name" className="">Nombre</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 ">
                                            <div className="md-form mb-0">
                                                <input type="text" id="lastname" className="form-control"  ref={this.apellidoRef}/>
                                                <label htmlFor="lastname" className="">Apellido</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="md-form mb-0">                                            
                                                <input type="date" id="date"  className="form-control "  ref={this.dateRef}/>
                                                <label htmlFor="date" className="">Fecha de nacimiento</label>
                                            </div>
                                        </div>    
                                        <div className="col-md-5">
                                        <label htmlFor="inputGroupSelect01"></label>
                                            <div className="input-group ">  
                                          <select className="custom-select" id="inputGroupSelect01" ref={this.generoRef}>
                                                <option selected>sexo</option>
                                                <option defaultValue  value="male">Masculino</option>
                                                <option value="female">Femenino</option>    
                                            </select>
                                            </div>
                                        </div>                                        
                                        
                                        <div className="col-md-12">
                                            <div className="md-form mb-0">
                                                <input type="text" id="email" name="email" className="form-control"  ref={this.emailRef}/>
                                                <label htmlFor="email" className="">Your email</label>
                                            </div>
                                        </div>                                        

                                    </div>                                      

                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="telefono"  className="form-control" ref={this.telefono}/>
                                                <label htmlFor="telefono" className="">Telefono</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="number" id="cedula" className="form-control" ref={this.dni}/>
                                                <label htmlFor="cedula" className="">Cedula</label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row ">                                        
                                        <div className="col-md-12">
                                            <div className="md-form">
                                                <textarea type="text" id="addres"  rows="2" className="form-control md-textarea" ref={this.adressRef}
                                                ></textarea>
                                                <label htmlFor="addres">direccion</label>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="col-md-11 ">
                                        <div className="text-center ">
                                            <button className="btn  btn-primary " onClick={this.submin}>Completar registro</button>                                
                                        </div>
                                    </div>

                                </form>
                            </div>                                
                        </div>                            
                    </div>      
                    <div className="col-md-5">
                    
                        <img  className="img-fluid" src="https://cdn.pixabay.com/photo/2017/01/11/18/53/cold-1972619_960_720.jpg" alt='camarada'/>                    
                    </div>
                    </div>
                 




            </React.Fragment>





         );
    }
}
//_id
const mapStateToProps = state=>{  
    return {
      userId:state.userData.user._id,
      a:state.userData.user
    }
  }
 
export default connect(mapStateToProps,{handleSingFirst,handleIsSingInToken})(DatosProfile);

/*

                    
                                    

                     */