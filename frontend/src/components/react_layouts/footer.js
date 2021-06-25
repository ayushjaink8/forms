import React, { Component } from 'react'
// import ReactDOM from 'react-dom';

export class Footer extends Component {
    render() {
        return (
            <>
                <div className="mt-5">

                    <footer className="bg-dark text-center text-white">
                        <div className="container p-4 pb-0">
                            <section className="mb-4">
                                {/* <!-- Facebook --> */}
                                <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/people/Ayush-Jain/100006754293577/" role="button">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                {/* <!-- Twitter --> */}
                                <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/ayushjaink8" role="button">
                                    <i className="fab fa-twitter"></i>
                                </a>

                                {/* <!-- Google --> */}
                                {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                    <i className="fab fa-google"></i>
                                </a> */}

                                {/* <!-- Instagram --> */}
                                <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/ayushjaink8/" role="button">
                                    <i className="fab fa-instagram"></i>
                                </a>

                                {/* <!-- Linkedin --> */}
                                <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ayushjaink8/" role="button">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>

                                {/* <!-- Github --> */}
                                <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/ayushjaink8/" role="button">
                                    <i className="fab fa-github"></i>
                                </a>
                            </section>
                        </div>

                        {/* <!-- Copyright --> */}
                        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                            © 2021 Copyright:
                            <a className="text-white" href="https://github.com/ayushjaink8/"> Ayush Jain </a>
                            <span className="d-none d-sm-inline"> || </span>
                            <a className="d-block d-sm-inline" href="https://iiitl.ac.in/"> IIIT Lucknow </a>
                        </div>

                    </footer>

                </div>
            </>
        )
    }
}

export default Footer
// ReactDOM.render(<Footer/>, document.getElementById('footer'))
