import React, { Component } from 'react'

export class Body extends Component {
    render() {
        return (
            <>
                <div id="form_body" className="container">
                    <br/>

                        <div className=" px-4 bg-dark text-white my-5 py-5 z-depth-1">

                            <section className="px-md-5 text-center text-lg-left dark-grey-text">

                                {/* <!--Grid row--> */}
                                <div className="row d-flex justify-content-center">

                                    {/* <!--Grid column--> */}
                                    <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">

                                        {/* <!-- Default form register --> */}
                                        <form className="text-center">

                                            <p className="h1" style={{marginBottom:"1em"}}>Fill My Form</p>

                                            <div className="form-row mb-4">
                                                <div className="col">
                                                    {/* <!-- First name --> */}
                                                    <input type="text" value="" id="firstName" name="firstName" className="form-control" placeholder="First name"/>
                                                </div>
                                                <div className="col">
                                                    {/* <!-- Last name --> */}
                                                    <input type="text" value="" id="lastName" name="lastName" className="form-control" placeholder="Last name"/>
                                                </div>
                                            </div>

                                            {/* <!-- E-mail --> */}
                                            <input type="email" value="" id="email" name="email" className="form-control mb-4" placeholder="E-mail"/>

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
                                                    <label className="h6 m-0 mr-2" htmlFor="male"> Male </label>
                                                    <input type="radio" value="female" id="female" name="gender" className="form-control w-25 h-100"/>
                                                    <label className="h6 m-0" htmlFor="female"> Female </label>
                                                </div>
                                            </div>

                                            {/* <!-- Phone number --> */}
                                            <input type="number" name="phone" id="phone" className="form-control" placeholder="Phone number"/>
                                            <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                                Optional - for two step authentication
                                            </small>

                                            {/* date of birth */}
                                            <div className="form-row mb-4">
                                                <div className="col-4 align-self-center">
                                                    <p className="h5 m-0">D.O.B: </p>
                                                </div>
                                                <div className="col-8">
                                                    <input type="date" value="" id="dob" name="dob" className="form-control" placeholder="D.O.B"/>
                                                </div>
                                            </div>

                                            {/* <!-- Confirmation Email --> */}
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" name="receive" className="custom-control-input" id="receive"/>
                                                <label className="custom-control-label" htmlFor="defaultRegisterFormNewsletter"> Receive Confirmation Email </label>
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
            </>
        )
    }
}

export default Body
