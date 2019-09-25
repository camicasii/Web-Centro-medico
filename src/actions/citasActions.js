import {SHOW_CITAS, ADD_CITA, DEL_CITA} from './types';

export const getCitas=()=>{
    return{
        type:SHOW_CITAS
    }
}

export  const addCita = (cita)=>{
    return{
        type:ADD_CITA,
        payload:cita
    }
}
export  const delCita = (cita)=>{
    return{
        type:DEL_CITA,
        payload:cita
    }
}
