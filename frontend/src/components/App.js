import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './react_layouts/header'
import Footer from './react_layouts/Footer'
import Body from './react_layouts/body'

export class App extends Component {
    render(){
        return(
            <>
                <Header/>

                <Body/>

                <Footer/>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))