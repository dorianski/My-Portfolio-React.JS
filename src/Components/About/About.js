import React from 'react';
import ReactDOM from 'react-dom';
import './About.scss';

class About extends React.Component {
    render() {
        return (

            <div className="about">

            <div className="aboutcontent">
                <h1>About Me</h1>
                <hr />

                        <div className="paragraph">
                <p>Hi there! I'm Dorian Stanciu, front end web developer.
                    I'm a well organised person, problem solver, I pay a lot of attention to small details because I think that's the main difference between a good website and a <i>GREAT</i> website.
                    Below you can find my current stack,but I'm always excited to learn new technologies!
                </p>
                        </div>

                        <div className="skillset">
                                <h3>My Skillset</h3>
                                <button><p>HTML5 <i className="fab fa-html5"></i></p></button><button><p>CSS3 <i className="fab fa-css3-alt"></i></p></button>
                                <br />
                                <button><p>Javascript <i className="fab fa-js"></i></p></button><button><p>Sass <i className="fab fa-sass"></i></p></button>
                                <br />
                                <button><p>git <i className="fab fa-git-square"></i></p></button><button><p>Responsive Web Design <i className="fas fa-mobile-alt"></i></p></button>
                                <br />
                                <button><p>Bootstrap <i className="fab fa-bootstrap"></i></p></button><button><p>JQUERY <i className="fab fa-js"></i></p></button>
                                <br />
                                <button><p>SEO <i className="fas fa-search"></i></p></button><button><p>github <i className="fab fa-github"></i></p></button>
                        </div>

            </div>
        </div>

        );
    }
}

export default About;