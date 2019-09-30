import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import About from './components/About';
import IndexPage from './components/IndexPage';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SingIn from './components/SingIn';
import SingOut from './components/SingUp';
import Servicios from './components/Servicios';
import DatosProfile from './components/Profile/DatosProfile';
import Profile from './components/Profile/Profile';
class AppRouter extends Component {
    state = {  }
    render() { 
        return (
            <Router>


                
                <Navbar/>
                <div className="fondo ">                   
                <Switch>                
                <Route exact path="/" component={IndexPage}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/servicios" component={Servicios}/>    
                <Route exact path="/servicios/:id" render={(props)=>{                    
                    const id=props.location.pathname.replace("/servicios/","")                    
                    return (<Servicios
                        id={id}
                    />)
                }
                } />
                <Route exact path="/SingIn" component={SingIn}/>
                <Route exact path="/SingUp" component={SingOut}/>                
                <Route exact path="/profile" component={Profile}/>  
                <Route exact path="/profile/data" component={DatosProfile}/>  
                <Route exact path="/SingUp" component={SingOut}/>  
                            
                </Switch>                
                </div>
                <Footer/>      
                   

            </Router>
          );
    }
}
 
export default AppRouter;