import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {getForms, addForm} from '../../actions/forms'

import TabNav from './TabNav'
import Tab from './Tab'
import Explore from './explore'

export class Body extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        dob: '',
        gender: 'Male',
    }

    constructor(props){
        super(props);

        this.state = {
            selected: 'Dashboard'
        }

    }

    setSelected = (tab) => {
        this.setState({ selected: tab });
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
        // const arr = this.state.firstname + ' ' + this.state.lastname;
        const temp = {
            name: this.state.firstname + ' ' + this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            dob: this.state.dob,
            gender: this.state.gender,
        }
        // console.log(temp);
        this.props.addForm(temp);
        console.log("Form Successfully Submitted in the database");
        this.setState({ selected: 'Submissions' });
    }

    onChange = e => {
        this.setState({  [e.target.name] : e.target.value  });
        // console.log(e.target.name,e.target.value);
        // console.log(this.state);
    }


    render() {
        // const {firstname, lastname, email, gender, phone, dob} = this.state;

        return (
            <>
                <TabNav tabs={['Dashboard','Submissions','Explore']} selected={this.state.selected} setSelected={this.setSelected}>

                    <Tab isSelected={this.state.selected === 'Dashboard'}>
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
                                                                <input type="text" onChange={this.onChange} id="firstName" name="firstname" className="form-control" placeholder="First name" required/>
                                                            </div>
                                                            <div className="col">
                                                                {/* <!-- Last name --> */}
                                                                <input type="text" onChange={this.onChange}  id="lastName" name="lastname" className="form-control" placeholder="Last name" required/>
                                                            </div>
                                                        </div>

                                                        {/* <!-- E-mail --> */}
                                                        <input type="email" onChange={this.onChange} id="email" name="email" className="form-control mb-4" placeholder="E-mail" required/>

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
                                                                <input type="radio" onChange={this.onChange} value="Male" id="male" name="gender" className="form-control w-25 h-100 ml-2"/>
                                                                <label className="h6 m-0 mr-2" htmlFor="male"> Male </label>
                                                                <input type="radio" onChange={this.onChange} value="Female" id="female" name="gender" className="form-control w-25 h-100"/>
                                                                <label className="h6 m-0" htmlFor="female"> Female </label>
                                                            </div>
                                                        </div>

                                                        {/* <!-- Phone number --> */}
                                                        <input type="number" onChange={this.onChange} name="phone" id="phone" className="form-control" placeholder="Phone number" required/>
                                                        <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                                            Optional - for two step authentication
                                                        </small>

                                                        {/* date of birth */}
                                                        <div className="form-row mb-4">
                                                            <div className="col-4 align-self-center">
                                                                <p className="h5 m-0">D.O.B: </p>
                                                            </div>
                                                            <div className="col-8">
                                                                <input type="date" onChange={this.onChange} id="dob" name="dob" className="form-control" placeholder="D.O.B" required/>
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
                    </Tab>



                    <Tab isSelected={this.state.selected === 'Submissions'}>
                        <h1>I am From submissions tab</h1>
                    </Tab>



                    <Tab isSelected={this.state.selected === 'Explore'}>
                        <h1>I am from Explore Tab</h1>
                        <Explore/>    {/* linking explore.js over here */}
                    </Tab>

                </TabNav>
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
