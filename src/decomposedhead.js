import React, {Component} from 'react';
// import logo from './logo.svg';
import logo from './todopostit.png';
import './App.css';

class decomposedhead extends Component {



    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{this.state.appTitle}</h1>
                </header>
                </div>

        );
    }
}

export default decomposedhead;
