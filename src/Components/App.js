import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Nav from './Nav/Nav';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Home from './Home/Home';

class App extends React.Component {

    render() {
        return (
            <div className="container">
            <Nav />
            </div>
        );
    }
}

export default App;