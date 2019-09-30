import React, { Component } from 'react';
import Sidebar from "react-sidebar"; 
const mql = window.matchMedia(`(min-width: 800px)`);

class Profilasdfasdfe extends Component {
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
 <div className="" >
            <div className="position-absolute">
            <div className= "col-md-6">
          <h1> asdfgsafgsadfsadfasdfasdf</h1>
          <h2>dfasfas</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum numquam veritatis, eaque, corporis fugit quidem nulla soluta atque accusantium aliquid placeat, incidunt totam ipsam officiis et? Nesciunt iure nostrum praesentium!</p>
          <br/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium enim saepe tempora eius eaque esse quos mollitia dolor facere. Dolorem blanditiis perferendis a. Architecto quo sunt autem doloremque. Molestias, iusto!</p>

    </div>
    </div>

            <div>
    <button className="btn btn-primary" id="menu-toggle" onClick={this.onSetSidebarOpen} >
    <span className="glyphicon glyphicon-menu-hamburger"> Menu</span>
    </button>
    </div>
    
    <div id="sidebar-wrapper " id='wrapper'>
      <ul className="sidebar-nav">
      <li>
                    <div class="logo-wrapper waves-light">
                        <a href="#"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                            class="img-fluid flex-center"/></a>
                        </div>
                    </li>



        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    
    


    </div>
    
          

    
     


              </React.Fragment>

         );
    }
}
 a
export default Profsadfasdfile;

/*
  <div className="d-flex  justify-content-between">
              
                <div className="side-nav fixed"  id="slide-out">
                <ul class="custom-scrollbar">
                
                    <li>
                    <div class="logo-wrapper waves-light">
                        <a href="#"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                            class="img-fluid flex-center"/></a>
                        </div>
                    </li>
                    <hr/>
                    <li>
                    <ul class="social">
                            <li><a href="#" class="icons-sm fb-ic"><i class="fab fa-facebook-f"> </i></a></li>
                            <li><a href="#" class="icons-sm pin-ic"><i class="fab fa-pinterest"> </i></a></li>
                            <li><a href="#" class="icons-sm gplus-ic"><i class="fab fa-google-plus-g"> </i></a></li>
                            <li><a href="#" class="icons-sm tw-ic"><i class="fab fa-twitter"> </i></a></li>
                        </ul>


                    </li>
                    <li>
                    <ul class="collapsible collapsible-accordion">
        <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-chevron-right"></i> Submit
            blog<i class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect">Submit listing</a>
              </li>
              <li><a href="#" class="waves-effect">Registration form</a>
              </li>
            </ul>
          </div>
        </li>
        <li><a class="collapsible-header waves-effect arrow-r"><i class="far fa-hand-pointer"></i>
            Instruction<i class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect">For bloggers</a>
              </li>
              <li><a href="#" class="waves-effect">For authors</a>
              </li>
            </ul>
          </div>
        </li>
        <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-eye"></i> About<i
              class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect">Introduction</a>
              </li>
              <li><a href="#" class="waves-effect">Monthly meetings</a>
              </li>
            </ul>
          </div>
        </li>
        <li><a class="collapsible-header waves-effect arrow-r"><i class="far fa-envelope"></i> Contact me<i
              class="fas fa-angle-down rotate-icon"></i></a>
          <div class="collapsible-body">
            <ul>
              <li><a href="#" class="waves-effect">FAQ</a>
              </li>
              <li><a href="#" class="waves-effect">Write a message</a>
              </li>
              <li><a href="#" class="waves-effect">FAQ</a>
              </li>
              <li><a href="#" class="waves-effect">Write a message</a>
              </li>
              <li><a href="#" class="waves-effect">FAQ</a>
              </li>
              <li><a href="#" class="waves-effect">Write a message</a>
              </li>
              <li><a href="#" class="waves-effect">FAQ</a>
              </li>
              <li><a href="#" class="waves-effect">Write a message</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
                    
                    </li>
                    <li>asdfasdf</li>
                    <li>asdfasdf</li>
                </ul>
                <div class="sidenav-bg rgba-blue-strong"></div>

                    
                </div>
                <div className="">
                <a href="#" data-activates="slide-out" class="btn btn-primary p-3 button-collapse"><i
    class="fas fa-bars"></i></a>
                </div>
                </div>
                
              

                */







                /****************************************
                  
                */