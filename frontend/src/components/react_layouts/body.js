import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {getForms, addForm} from '../../actions/forms'

export class Body extends Component {

    state = {
        appno:'',
        name: '',
        email:'',
        gender: '',
        phone: '',
        dob: '',
    }


    // static propTypes ={
    //     forms: PropTypes.array.isRequired
    // }

    // componentDidMount(){
    //     this.props.getForms();
    // }

    static propTypes ={
        addForm: PropTypes.func.isRequired
    }

    onSubmit = e => {
        e.preventDefault();
        console.log("form successfully submitted");

        //adding data to the states

        this.state.name = "a";
        this.state.email = "abc@gmail.com";
        this.state.gender = "c";
        this.state.phone = "1234";
        this.state.dob = "12-4-2021";

        ///////////////////

        const {name,email,gender,phone,dob} =this.state;
        const form = {name, email, gender, phone, dob};
        this.props.addForm(form);
    }


    render() {
        const {name,email,gender,phone,dob} = this.state
        return (
            <>
                <Fragment>
                    <div id="form_body" className="container">
                        <br/>

                            <div className=" px-4 bg-dark text-white my-5 py-5 z-depth-1">

                                <section className="px-md-5 text-center text-lg-left dark-grey-text">

                                    {/* <!--Grid row--> */}
                                    <div className="row d-flex justify-content-center">

                                        {/* <!--Grid column--> */}
                                        <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">

                                            {/* <!-- Default form register --> */}
                                            <form className="text-center" onSubmit={this.onSubmit} >

                                                <p className="h1" style={{marginBottom:"1em"}}>Fill My Form</p>

                                                <div className="form-row mb-4">
                                                    <div className="col">
                                                        {/* <!-- First name --> */}
                                                        <input type="text" id="firstName" name="firstName" className="form-control" placeholder="First name" required/>
                                                    </div>
                                                    <div className="col">
                                                        {/* <!-- Last name --> */}
                                                        <input type="text" id="lastName" name="lastName" className="form-control" placeholder="Last name" required/>
                                                    </div>
                                                </div>

                                                {/* <!-- E-mail --> */}
                                                <input type="email" id="email" name="email" className="form-control mb-4" placeholder="E-mail" required/>

                                                {/* <!-- Password --> */}
                                                {/* <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password"
                                                aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                                                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                                    At least 8 characters and 1 digit
                                                </small> */}

                                                {/* Gender */}
                                                <div className="form-row mb-4">
                                                    <div className="col-4 align-self-center">
                                                        {/* <!-- D.O.B --> */}
                                                        <p className="h5 m-0">Gender: </p>
                                                    </div>
                                                    <div className="col-8 d-flex align-items-center">
                                                        {/* <!-- Last name --> */}
                                                        <input type="radio" value="male" id="male" name="gender" className="form-control w-25 h-100 ml-2"/>
                                                        <label className="h6 m-0 mr-2" htmlFor="male" defaultChecked> Male </label>
                                                        <input type="radio" value="female" id="female" name="gender" className="form-control w-25 h-100"/>
                                                        <label className="h6 m-0" htmlFor="female"> Female </label>
                                                    </div>
                                                </div>

                                                {/* <!-- Phone number --> */}
                                                <input type="number" name="phone" id="phone" className="form-control" placeholder="Phone number" required/>
                                                <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                                    Optional - for two step authentication
                                                </small>

                                                {/* date of birth */}
                                                <div className="form-row mb-4">
                                                    <div className="col-4 align-self-center">
                                                        <p className="h5 m-0">D.O.B: </p>
                                                    </div>
                                                    <div className="col-8">
                                                        <input type="date" id="dob" name="dob" className="form-control" placeholder="D.O.B" required/>
                                                    </div>
                                                </div>

                                                {/* <!-- Confirmation Email --> */}
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" name="receive" className="custom-control-input" id="receive"/>
                                                    <label className="custom-control-label" htmlFor="receive"> Receive Confirmation Email </label>
                                                </div>

                                                {/* <!-- Submit button --> */}
                                                <button className="btn btn-info my-4 btn-block" type="submit">Submit</button>

                                                {/* <p>Sign up with:</p>

                                                <a href="#" className="mx-1" role="button"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#" className="mx-1" role="button"><i className="fab fa-twitter"></i></a>
                                                <a href="#" className="mx-1" role="button"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="#" className="mx-1" role="button"><i className="fab fa-github"></i></a> */}

                                                <hr/>

                                                {/* <!-- Terms of service --> */}
                                                <p>
                                                    By clicking <em> Submit </em> you agree to our
                                                    <a href="" target="_blank"> Terms of Service</a>
                                                </p>

                                            </form>

                                        </div>

                                    </div>

                                </section>

                            </div>

                        <br/>
                    </div>
                </Fragment>
            </>
        );
    }
}

//   Mapping state of reducers/forms.js with props over here so that we can receive data from the reducers
//    Vague Data Flow:  props -> mapStatesToProps -> initialState in reducers/forms.js -> store.js  -> database (thunk and diff. middleware included)
//     -> calling data from database in actions/forms.js  and then exporting it here!

// const mapStatesToProps = state => ({
//     forms: state.forms.forms
// });



// export default connect(mapStatesToProps, {getForms})(Body);
export default connect(null, {addForm})(Body);

// export default Body
