import {SHOW_CITAS, DEL_CITA, ADD_CITA} from '../actions/types';

//casa reducer tiene su propio state

const initialState ={
    citas:[],

}

export default function(state=initialState, action){
    switch(action.type){
        case SHOW_CITAS:
            return{
                ...state
            }
        case ADD_CITA:
            return {
            ...state,
            citas:[...state.citas, action.payload]
        }
        case DEL_CITA:
            return{
                ...state,
                //Obserba que se accede al valor citas del state y no a state completo
                citas:state.citas.filter((stt)=>(stt.id!==action.payload))
            }
        default: 
        return  state;
    }
}