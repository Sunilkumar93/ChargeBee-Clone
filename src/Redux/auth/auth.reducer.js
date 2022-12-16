import { CURRENT_USER } from "./auth.types";

const initialData = {
    user:null
}


export const authReducer = (state=initialData,{type,payload}) => {
    switch(type){
        case CURRENT_USER : {
            return {
                ...state,
                user:payload,
            }
        }
        default : {
            return state;
        }
    }
}