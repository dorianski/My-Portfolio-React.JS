import React from 'react';
import ReactDOM from 'react-dom';
import './Portfolio.scss';
import portfolio_background from './portfolio.jpg';
import project1img from './project1.png';
import project2img from './project2.png';
import project3img from './project3.png';
import project4img from './project4.png';
import project5img from './project5.png';
import project6img from './project6.png';
import reactIcon from './react.png';

class Portfolio extends React.Component {
    render () {
        return (

            <div className="portfolio">

                <div className="portfoliocontent">

                                <div className="project1">

                                    <div className="project1left">
                                    <img src={project1img} />
                                    </div>
                                    
                                    <div className="project1right">
                                    <p id="topp">This is a website that I created for a new restaurant in Galati, Romania</p>
                                    <h6>Technologies used :</h6>
                                    <p>HTML5 CSS3 Javascript Jquery Responsive Web Design SEO</p>
                                    <a href="http://clubnauticmonaco.com/" target="get_blank"><button>View Live Version</button></a><a href="https://github.com/dorianski/clubnauticmonaco" target="get_blank"><button>View Code</button></a>
                                    </div>

                                </div>

                                <div className="project2">
                                        <div className="project2left">
                                    <img src={project2img} />
                                        </div>

                                        <div className="project2right">
                                    <p id="topp">This is a website that I created for a new dentist office in Galati, Romania</p>
                                    <h6>Technologies used :</h6>
                                    <p>HTML5 CSS3 Javascript Jquery Responsive Web Design SEO</p>
                                    <a href="http://nelurugina.ro/" target="get_blank"><button>View Live Version</button></a><a href="https://github.com/dorianski/nelurugina" target="get_blank"><button>View Code</button></a>
                                    </div>
                                </div>

                                <div className="project3">
                                        <div className="project3left">
                                    <img src={project3img} />
                                        </div>

                                        <div className="project3right">
                                    <p id="topp">The official website that i developed for software company JAVAGEMENT</p>
                                    <h6>Technologies used :</h6>
                                    <p>HTML5 CSS3 Javascript Jquery Responsive Web Design SEO</p>
                                    <a href="http://dorianproject1.000webhostapp.com/" target="get_blank"><button>View Live Version</button></a><a href="https://github.com/dorianski/javagement" target="get_blank"><button>View Code</button></a>
                                    </div>
                                </div>

                                <div className="project4">
                                    <div className="project4left">
                                <img src={project4img} />
                                    </div>

                                    <div className="project4right">
                                <p id="topp">This is a website that is currently under construction for a hotel in Cluj-Napoca,Romania</p>
                                <a href="http://dorianproject2.000webhostapp.com/" target="get_blank"><button>View Live Version</button></a><a href="https://github.com/dorianski/Hotel-Roxana" target="get_blank"><button>View Code</button></a>
                                </div>
                                </div>

                                <div className="project5">
                                    <div className="project5left">
                                <img src={project5img} />
                                    </div>

                                <div className="project5right">
                                <p id="topp">This is my personal portfolio website but without React.Js framework</p>
                                <h6>Technologies used :</h6>
                                <p>HTML5 CSS3 Javascript Jquery Responsive Web Design SEO</p>
                                <a href="" target="get_blank"><button>View Live Version</button></a><a href="https://github.com/dorianski/My-Portfolio-no-React-version-" target="get_blank"><button>View Code</button></a>
                                </div>
                            </div>

                            <div className="project6">
                                    <div className="project6left">
                                    <img src={project6img} />
                                    <img src={reactIcon} id="reactIcon"/>
                                    </div>

                                <div className="project6right">
                                <p id="topp">This is my personal portfolio website created with React.Js framework</p>
                                <h6>Technologies used :</h6>
                                <p><i className="fab fa-react"></i>ReactJs</p>
                                <p>HTML5 CSS3 Javascript Jquery Responsive Web Design SEO</p>
                                <a href="http://dorianstanciu.com/" target="get_blank"><button>View Live Version</button></a><a href="https://github.com/dorianski/My-Portfolio-no-React-version-" target="get_blank"><button>View Code</button></a>
                                </div>
                            </div>
                    </div>

                </div>
            
        );
    }
}

export default Portfolio;

