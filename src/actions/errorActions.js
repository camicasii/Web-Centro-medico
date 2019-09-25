import {VALIDATE_FORM, SHOW_ERROR} from './types'

export const validateForm=(state)=>{
    return{
        type:VALIDATE_FORM,
        payload:state
    }
}
export const showError=(state)=>{
    return{
        type:SHOW_ERROR,
        payload:state
    }
}