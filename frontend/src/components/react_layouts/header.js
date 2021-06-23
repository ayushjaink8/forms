import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
// import './css/header.css';

export class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" style={{height:"6em"}}>
                    <a className="navbar-brand mr-auto mr-lg-0" href="#" style={{fontSize:"3em"}}>
                    <img src="https://icon-library.com/images/form-icon/form-icon-5.jpg" style={{width: "1em", marginBottom:"10px"}}/> Forms &nbsp;&nbsp;
                    </a>
                    <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse p-3 offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Notifications</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                            {/* <!-- <li className="nav-item">
                                <a className="nav-link" href="#">Switch account</a>
                            </li> --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                {/* <div className="nav-scroller bg-white shadow-sm" style={{marginTop:"3em"}}>
                    <nav className="nav nav-underline" style={{justifyContent:"center"}}>
                        <a className="nav-link active" href="#">Dashboard</a>
                        <a className="nav-link" href="#">
                            Submissions
                            <span className="badge badge-pill bg-light align-text-bottom">9+</span>
                        </a>
                        <a className="nav-link" href="#">Explore</a> */}
                        {/* <a className="nav-link" href="#">Suggestions</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link" href="#">Link</a> */}
                    {/* </nav>
                </div> */}
            </>
        )
    }
}

export default Header
// ReactDOM.render(<header/>, document.getElementById('header'))