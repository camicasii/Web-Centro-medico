import {SING_IN,SING_UP, IS_SING_IN, SING_OUT} from './types';
import Axios  from 'axios';
import jwtDecode from 'jwt-decode';
const url='https://myapp256.herokuapp.com/api/';
//const url='http://localhost:4000/api/';
/**
 * 
                                        LOGIN
 */
export const handleSingIn=(data)=>async dispatch=>{    
    await Axios.post(url+'signin',{
        username: data.username,
        password: data.password        
    }).then(res=>{
           res.data.token =res.data.token.split(" ")[1]                      
           Axios.defaults.headers.common={'Authorization':res.data.token}
           localStorage.setItem("token",res.data.token)
           localStorage.setItem("check",res.data.token)
           console.log("post",jwtDecode(res.data.token).firstLogin)
           const data={
               data:jwtDecode(res.data.token),
               token:res.data.token,
               success:res.data.success,
               login:true
           }
        if(res.status===200){
        dispatch({
            type:SING_IN,
            payload:data
            })
            window.location.href='/profile'
        }
        else
        {   
            console.log(res.status);
            dispatch({
                type:SING_IN,
                payload:res.data
                })            
        }        
    })
    .catch(e=>{        
        const err = e.toString().includes("401")?401:404;
        const data={
            success :err,
            login:false
        }
            dispatch({
                type:SING_IN,
                payload:data
                })
    })    
}
/**
 * 
                                        LOGUP
 */




export  const handleSingup =(data)=>async dispatch=>{
    await Axios.post(url+'signup',{
        username: data.username,
        password: data.password,
        firstLogin:data.firstLogin  
    }).then(res=>{       
        console.log(res);
        
        res.data.token =res.data.token.split(" ")[1]                      
        Axios.defaults.headers.common={'Authorization':res.data.token}
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("check",res.data.token)        
           const data={
               data:jwtDecode(res.data.token),
               token:res.data.token,
               success:res.data.success,               
               login:true
           }

        if(res.status===200){
        dispatch({
            type:SING_UP,
            payload:data
            })
        }
        else
        {   
            const data={                
                login:false
            }
            dispatch({
                type:SING_UP,
                payload:data
                })            
        }
        
    }).catch(e=>{      
        console.log(e);  
        const err = e.toString().includes("401")?401:404;
        const data={
            success :err,
            login:false
        }
            dispatch({
                type:SING_UP,
                payload:data
                })
    })    
}

/**
 * 
                                        LOGUOT
 */

export  const handleSingOut =(data)=>async dispatch=>{
    localStorage.removeItem("token")
    data={
        login:false
    }
    dispatch({
        type:SING_OUT,
        payload:data
        })   
    }
/**
 * 
                                        ISLOGIN
 */
    
    export  const handleIsSingIn =(data)=>async dispatch=>{
        await Axios(url+'issignin').then(res=>{
            if(res.status===200){
                data={
                    login:true
                }     
                dispatch({
                    type:IS_SING_IN,
                    payload:data
                    })   
            }
            else{
                data={
                    login:false
                }     
                dispatch({
                    type:IS_SING_IN,
                    payload:data
                    })   
            }
            
        }).catch(e=>{        
            const err = e.toString().includes("401")?401:404;
            const data={
                success :err,
                login:false
            }
                dispatch({
                    type:IS_SING_IN,
                    payload:data
                    })
        })    
    }
    export  const handleIsSingInToken =(data)=>async dispatch=>{        
          const token= localStorage.getItem('token')
          console.log(token);
          
          const check= localStorage.getItem("check")
          let user=""
          if(token !== null)
          user=jwtDecode(token)
          
          
        const data={         
            succes:token===check,
            user

        }
        dispatch({
            type:IS_SING_IN,
            payload:data
            })

        
    }
  