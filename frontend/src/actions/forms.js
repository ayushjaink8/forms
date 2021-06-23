import axios from 'axios';
import { GET_FORMS, ADD_FORM, DELETE_FORM } from './types';

// get forms from our database and then send them to the front-end or visa-versa (i.e from and at url: api/forms )

// get forms from data and export it!
export const getForms = () => dispatch =>{
    axios
    .get("/api/forms/")

    .then(res => {
        dispatch({
            type: GET_FORMS,
            payload: res.data
        });
    })

    .catch(err => console.log(err,"Error from getForms actions/forms.js"));
};


// Delete form action!

export const deleteForm = (id) => dispatch =>{
    axios
    .delete(`/api/forms/${id}/`)

    .then(res => {
        dispatch({
            type: DELETE_FORM,
            payload: id
        });
    })

    .catch(err => console.log(err,"Error from deleteForm actions/forms.js"));
};



// add new form action!

export const addForm = (form) => dispatch =>{
    axios
    .post("/api/forms/", form)

    .then(res => {
        dispatch({
            type: ADD_FORM,
            payload: res.data
        });
    })

    .catch(err => console.log(err,"Error from addForm actions/forms.js"));
};