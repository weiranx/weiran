import React, {Component} from 'react'
import './Aboutme.css'

class Aboutme extends Component {
    render() {
        return (
            <div className="Aboutme container">
                <h5 className="subtitle">About Me</h5>
                <div className="content">
                    <img src="/profile.jpg" className="rounded float-right profile-img" />
                    <p>Hi. My Name is Weiran Xiong. I am a college student in University of California, San Diego. I am a first-year sophomore student, majoring in a math-computer science.</p>
                    <p>Being an international student in the US, I feel like </p>
                </div>
                <h5 className="subtitle">Skills</h5>
                <div className="content">
                    <ul className="content-list">
                        <li>Web</li>
                        <li>iOS</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>Python</li>
                    </ul>
                </div>

                <h5 className="subtitle">Interests</h5>
                <div className="content">
                    <ul className="content-list">
                        <li>Travel</li>
                        <li>Code</li>
                        <li>Food</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Aboutme