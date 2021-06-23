import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './react_layouts/header';
import Footer from './react_layouts/Footer';
import Body from './react_layouts/body';

import { Provider } from 'react-redux';
import store from '../store';


//   This is the main app where all the react_layouts are integrated !

export class App extends Component {
    render(){
        if(true){              // Write any condition you want
            return(
                    <>
                        <Provider store={store}>
                            <Header/>
                            <Body/>
                            <Footer/>
                        </Provider>
                    </>
            )
        }
        else{
            return(
                <>
                    <Provider store={store}>
                        <h1>I am from App.js else statement</h1>
                    </Provider>
                </>
            )
        }
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))