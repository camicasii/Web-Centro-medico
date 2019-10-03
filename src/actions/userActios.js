import {SHOW_USERS,SHOW_USER, SING_FIRST} from './types';
import Axios  from 'axios';
import { async } from 'q';
import jwtDecode from 'jwt-decode';

const url='https://myapp256.herokuapp.com/api/';
//const url='http://localhost:4000/api/';
export const handleShowUsers=()=>async dispatch=>{
    console.log(Axios.defaults.xsrfHeaderName);
    
    await Axios(url+'user').then(res=>{
        if(res.status===200){
        console.log(res.data.data)
        dispatch({
            type:SHOW_USERS,
            payload:res.data.data
            })            
        }
        else
        {
            console.log("error de coneccion");
            
        }
        
    })
    .catch(e=>console.log(e))
}


export const handleShowUser=(id)=>async dispatch=>{
    await Axios(url+'user/'+id).then(res=>{
        if(res.status===200){
        console.log(res.data.data)        
        dispatch({
            type:SHOW_USER,
            payload:res.data.data
            })
        }
        else
        {
            console.log("error de coneccion");
            
        }
        
    })
    .catch(e=>console.log(e))
}

export  const modifyData =(formData)=>async dispatch=>{                
    console.log("modifyData");
    
    
}
export  const handleSingFirst =(formData)=>async dispatch=>{                    
    await Axios.post(url+'patient',formData).then(res=>{
        console.log(res);
        
        const data={
            firtstLogin:false
        }
        dispatch({
            type:SING_FIRST,
            payload:true
            })
    }).catch(e=>{
        console.log(e);
        
    })
}