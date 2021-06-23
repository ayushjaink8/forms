//    Forms Reducers ...

import {GET_FORMS, ADD_FORM, DELETE_FORM} from "../actions/types.js";


const initialState = {
    // anything: [],    anything can be present already (that's why we are using ...state [at line no.15])
    forms: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_FORMS:
            return {
                ...state,
                forms: action.payload
            };
        case ADD_FORM:
            return {
                ...state,
                forms: [...state.forms, action.payload]
            };
        case DELETE_FORM:
            return {
                ...state,
                forms: state.forms.filter(form => form.id !== action.payload )
            }
        default:
            return state;
    }
}

