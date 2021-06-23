import React, { Component } from 'react'
export class TabNav extends Component {
    render() {
        return (
            <>
                <div className="nav-scroller bg-white shadow-sm" style={{marginTop:"3em"}}>
                    <nav className="nav nav-underline" style={{justifyContent:"center",color:"black"}}>
                        {
                            this.props.tabs.map ( tab => {
                                const active = (tab === this.props.selected ? 'active' : '' );

                                return (
                                    <a key={ tab } className={"nav-link " + active} onClick={ () => {this.props.setSelected(tab); return false;} } href="#">
                                        { tab }
                                    </a>
                                );
                            })

                        }


                        {/* <a className="nav-link" href="#">
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
                    </nav>
                </div>
                { this.props.children }
            </>
        )
    }
}

export default TabNav
