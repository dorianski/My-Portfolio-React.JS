import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Nav.scss';
import Logo from './logo1.png';
import App from '../App';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';

class Nav extends Component {

   
    state = {
        currentPage: <Home />
    }

    switchHomeHandler = () => {
        this.setState({currentPage: <Home />});
    }

    switchAboutHandler = () => {
        this.setState({currentPage: <About />});
    }

    switchPortfolioHandler = () => {
        this.setState({currentPage: <Portfolio />});
    }

    switchContactHandler = () => {
        this.setState({currentPage: <Contact />});
    }




    render() {
        


        return (

            <div class="container">

            <div className="menu">

                <div className="logo">
                    <a href="index.html"><img src={Logo} /></a>
                </div>

                <div className="nav">
                    <ul className="nav-links">
                        <button onClick={this.switchHomeHandler}><li id="home">Home</li></button>
                        <button onClick={this.switchAboutHandler}><li id="about">About</li></button>
                        <button onClick={this.switchPortfolioHandler}><li id="portfolio">Portfolio</li></button>
                        <button onClick={this.switchContactHandler}><li id="contact">Contact</li></button>

                        

                    </ul>
                </div>

                <div className="social">
                    <ul className="social-links">
                        <li><a href="https://www.facebook.com/stanciu.dorian.37" target="get_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/stanciudorian/" target="get_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/StanciuDorian" target="get_blank"><i className="fa fa-twitter-square"></i></a></li>
                        <li><a href="https://github.com/dorianski" target="get_blank"><i className="fa fa-github-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/dorian-stanciu-3577b11a0/" target="get_blank"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>

                <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                </div>

            </div>

            {this.state.currentPage}

            </div>
        );
    }



}


export default Nav;