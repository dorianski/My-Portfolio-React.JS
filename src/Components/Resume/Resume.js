import React from 'react';
import ReactDOM from 'react-dom';
import './Resume.scss';
import resume_doc from './resume.png';

class Resume extends React.Component {
    render() {
        return(

            <div class="resume">
                    <img src={resume_doc} id="resumepng" />
            </div>

        );
    }
}

export default Resume;