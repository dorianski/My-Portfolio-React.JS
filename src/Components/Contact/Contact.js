import React from 'react';
import ReactDOM from 'react-dom';
import './Contact.scss';

class Contact extends React.Component{
    render() {
        return(

            <div className="contact">
            <div className="contactcontent">
                <h1>Contact Me</h1>
                <hr />
                <p>Feel free to contact me for any kind of job/web project.</p>

                <div className="paragraph1">
                        <div className="container form-top">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                                        <div className="panel panel-danger">
                                            <div className="panel-body">
                                                <form id="reused_form">
                                                    <div className="form-group">
                                                        <label >Name</label>
                                                        <input type="text" name="name" required className="form-control" placeholder="Enter Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Email</label>
                                                        <input type="email" name="email" required className="form-control" placeholder="Enter Email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Message</label>
                                                        <textarea rows="3" name="message" className="form-control" placeholder="Type Your Message"></textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <button className="btn btn-raised btn-lg btn-warning" type="submit">Send</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="paragraph2">
                                <p><i className="fa fa-phone"></i> 07459856818</p>
                                <p><i className="fa fa-envelope"></i> contact@dorianstanciu.com</p>
                                <p><i className="fas fa-map-marker-alt"></i> Wolverhampton, West Midlands, United Kingdom</p>
                        </div>
        </div>
        </div>

        );
    }
}

export default Contact;