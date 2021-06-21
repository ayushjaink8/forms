import React, { Component } from 'react'

export class Body extends Component {
    render() {
        return (
            <>
                <div id="form_body" className="container">
                    <br/>
                    {/* <div id="form_container" className="p-3 m-2 text-center bg-dark text-white"> */}
                        {/* <div className="row gtr-uniform">
                            <div className="col-12">
                                <h1 className="text-center">I m from body</h1>
                            </div>
                            <div class="col-12 input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">&nbsp;Name: &nbsp;</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="col-6">
                                <h1 className="">Col-6</h1>
                            </div>
                            <div className="col-6">
                                <h1 className="">Col-6</h1>
                            </div>
                        </div> */}

                        <div className=" px-4 bg-dark text-white my-5 py-5 z-depth-1">

                            <section className="px-md-5 text-center text-lg-left dark-grey-text">

                                {/* <!--Grid row--> */}
                                <div className="row d-flex justify-content-center">

                                    {/* <!--Grid column--> */}
                                    <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">

                                        {/* <!-- Default form register --> */}
                                        <form className="text-center" action="#!">

                                            <p className="h1" style={{marginBottom:"1em"}}>Fill My Form</p>

                                            <div className="form-row mb-4">
                                                <div className="col">
                                                    {/* <!-- First name --> */}
                                                    <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name"/>
                                                </div>
                                                <div className="col">
                                                    {/* <!-- Last name --> */}
                                                    <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name"/>
                                                </div>
                                            </div>

                                            {/* <!-- E-mail --> */}
                                            <input type="email" className="form-control mb-4" placeholder="E-mail"/>

                                            {/* <!-- Password --> */}
                                            {/* <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password"
                                            aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                                            <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                                At least 8 characters and 1 digit
                                            </small> */}

                                            {/* <!-- Phone number --> */}
                                            <input type="number" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number"
                                            aria-describedby="defaultRegisterFormPhoneHelpBlock"/>
                                            <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                                Optional - for two step authentication
                                            </small>

                                            {/* date of birth */}
                                            <div className="form-row mb-4">
                                                <div className="col-4 align-self-center">
                                                    {/* <!-- D.O.B --> */}
                                                    <p className="h5 m-0">D.O.B</p>
                                                </div>
                                                <div className="col-8">
                                                    {/* <!-- Last name --> */}
                                                    <input type="date" className="form-control" placeholder="D.O.B"/>
                                                </div>
                                            </div>

                                            {/* <!-- Confirmation Email --> */}
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter"/>
                                                <label className="custom-control-label" for="defaultRegisterFormNewsletter"> Receive Confirmation Email </label>
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

                    {/* </div> */}
                    <br/>
                </div>
            </>
        )
    }
}

export default Body
