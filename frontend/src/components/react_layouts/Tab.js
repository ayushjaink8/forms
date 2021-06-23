import React, { Component } from 'react'

export class Tab extends Component {
    render() {
        if(this.props.isSelected != ""){
            return (
                <>
                    {this.props.children}
                    {/* <br/>
                    <h1>abc</h1> */}
                </>
            );
        }

        // If you want to return this on each tab :
        // else{
        //     return (
        //         <div><h1>I am not returning anything</h1></div>
        //     );
        // }

        return null;
    }
}

export default Tab;
