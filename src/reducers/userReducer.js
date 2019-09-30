import {SING_IN,SING_UP,SHOW_USERS, SING_OUT,IS_SING_IN} from '../actions/types';

//casa reducer tiene su propio state

const initialState ={
    succes:false,
    users:{},
    user:{},
    firtstLogin:true

}

export default function(state=initialState, action){
    switch(action.type){


            case SHOW_USERS:
            return{
                ...state,
                users:action.payload
            }                    
            case SING_UP:
            return{
                ...state,
                user:action.payload,
                succes:action.payload.login
            }        
            case SING_IN:
            return{
                ...state,
                user:action.payload,
                succes:action.payload.login
            }        
            case SING_OUT:
            return{
                ...state,
                user:action.payload,
                succes:action.payload.login
            } 
            case IS_SING_IN:
            return{
                ...state,
                succes:action.payload.succes,
                user:action.payload.user
            }        
        default: 
        return  state;
    }
}