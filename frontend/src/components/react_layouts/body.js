import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FormValidations from '../JS_Helmets/FormValidations';

import {getForms, addForm, deleteForm} from '../../actions/forms'

import TabNav from './TabNav'
import Tab from './Tab'
import Explore from './explore'
import Submissions from './Submissions';

export class Body extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        feedback_text: '',
        dob: '',
        gender: '',
        sendEmail: false,
    }

    constructor(props){
        super(props);

        this.state = {
            selected: 'Dashboard'
        }

    }

    setSelectedTab = (tab) => {
        this.setState({ selected: tab });
    }

    static propTypes ={
        forms: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getForms();
    }

    static propTypes ={
        addForm: PropTypes.func.isRequired
    }

    onSubmit = e => {
        e.preventDefault();

        if(this.state.lastName===undefined){
            this.state.lastName="";
        }
        const sendData = {
            name: this.state.firstName + ' ' + this.state.lastName,
            email: this.state.email,
            feedback_text: this.state.feedback_text,
            dob: this.state.dob,
            gender: this.state.gender,
            sendEmail: this.state.sendEmail
        }
        
        this.props.addForm(sendData);
        console.log("Form Successfully Submitted in the database");

        this.setSelectedTab('Submissions');

        this.setState({ 
            firstName: '',
            lastName: '',
            email: '',
            feedback_text: '',
            dob: '',
            gender: '',
            sendEmail: false
        });
    }

    onChange = e => {
        this.setState({  [e.target.name] : e.target.value  });
    }

    onReceiveEmail = e => {
        if(e.target.checked){
            this.state.sendEmail=true;
        } else {
            this.state.sendEmail=false;
        }
    }


    render() {
        return (
            <>
                <TabNav tabs={['Dashboard', 'Submissions', 'Explore']} selected={this.state.selected} setSelected={this.setSelectedTab}>

                    <Tab isSelected={this.state.selected === 'Dashboard'}>
                        <Fragment>
                            <div id="form_body" className="container">
                                <br/>

                                    <div className=" px-4 bg-dark text-white my-5 py-5 z-depth-1">
                                        <section className="px-md-5 text-center text-lg-left dark-grey-text">

                                            <div className="row d-flex justify-content-center">          {/* <!--Grid row--> */}
                                                <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">         {/* <!--Grid column--> */}

                                                    {/* <!-- Form Register Layout --> */}
                                                    <form className="text-center" onSubmit={this.onSubmit} >

                                                        <p className="h1" style={{marginBottom:"1em"}}>Fill My Form</p>

                                                        <div className="form-row mb-4">
                                                            <div className="col">
                                                                {/* <!-- First name --> */}
                                                                <input type="text" onChange={this.onChange} id="firstName" name="firstName" className="form-control" placeholder="First name" required/>
                                                            </div>
                                                            <div className="col">
                                                                {/* <!-- Last name --> */}
                                                                <input type="text" onChange={this.onChange}  id="lastName" name="lastName" className="form-control" placeholder="Last name"/>
                                                            </div>
                                                        </div>

                                                        {/* <!-- E-mail --> */}
                                                        <input type="email" onChange={this.onChange} id="email" name="email" className="form-control mb-4" placeholder="E-mail" required/>

                                                        {/* Gender */}
                                                        <div className="form-row mb-4">

                                                            <div className="col-4 align-self-center">
                                                                <p className="h5 m-0">Gender: </p>
                                                            </div>

                                                            <div className="col-8 d-flex align-items-center">
                                                                <input type="radio" onChange={this.onChange} value="Male" id="male" name="gender" className="form-control w-25 h-100 ml-2" required/>
                                                                <label className="h6 m-0 mr-2" htmlFor="male"> Male </label>
                                                                <input type="radio" onChange={this.onChange} value="Female" id="female" name="gender" className="form-control w-25 h-100"/>
                                                                <label className="h6 m-0" htmlFor="female"> Female </label>
                                                            </div>

                                                        </div>

                                                        {/* date of birth */}
                                                        <div className="form-row">
                                                            <div className="col-4 align-self-center">
                                                                <p className="h5 m-0">D.O.B: </p>
                                                            </div>
                                                            <div className="col-8">
                                                                <input type="date" onChange={this.onChange} id="dob" name="dob" className="form-control" placeholder="D.O.B" required/>
                                                            </div>
                                                        </div>
                                                        <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                                            Age should be more than 18 years!
                                                        </small>

                                                        {/* <!-- Phone number --> */}
                                                        {/* <div className="form-row">
                                                            <div className="col-3 col-sm-2">
                                                                <input type="text" onChange={this.onChange,this.phoneInput} id="phone_code" name="phone_code" className="form-control" placeholder="+91" required/>
                                                            </div>
                                                            <div className="col-9 col-sm-10">
                                                                <input type="number" onChange={this.onChange,this.phoneInput} name="phone" id="phone" className="form-control" placeholder="Phone number" required/>
                                                            </div>
                                                        </div> */}


                                                        {/* <!-- Feedback Text --> */}
                                                        <div className="form-row mb-4">
                                                            <div className="col">
                                                                <textarea type="text" onChange={this.onChange} id="feedback_text" name="feedback_text" rows="4" className="form-control" placeholder="Your feedback ..." required/>
                                                            </div>
                                                        </div>

                                                        {/* <!-- Confirmation Email --> */}
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" onChange={this.onReceiveEmail}  name="receive" className="custom-control-input" id="receive" />
                                                            <label className="custom-control-label" htmlFor="receive"> Receive Confirmation Email </label>
                                                        </div>

                                                        {/* <!-- Submit button --> */}
                                                        <button className="btn btn-info my-4 btn-block" type="submit">Submit</button>

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

                            {/* Adding script for form validations like date of birth should be 18+  */}
                            <FormValidations/>

                        </Fragment>
                    </Tab>

                    <Tab isSelected={this.state.selected === 'Submissions'}>
                        <Fragment>
                            <Submissions tableData={this.props.forms} deleteBtn={this.props.deleteForm}/>
                        </Fragment>
                    </Tab>



                    <Tab isSelected={this.state.selected === 'Explore'}>
                        <>
                            <Explore/>
                        </>
                    </Tab>


                </TabNav>
            </>
        );


    }
}

//   Mapping state of reducers/forms.js with props over here so that we can receive data from the reducers
//    Vague Data Flow:  props -> mapStatesToProps -> initialState in reducers/forms.js -> store.js  -> database (thunk and diff. middleware included)
//     -> calling data from database in actions/forms.js  and then exporting it here!

const mapStatesToProps = state => ({
    forms: state.forms.forms
});



// export default connect(mapStatesToProps, {getForms})(Body);
export default connect( mapStatesToProps , {addForm,getForms,deleteForm})(Body);

// export default Body
