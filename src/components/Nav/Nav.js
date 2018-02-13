import React, { Component } from 'react'
import './Nav.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            navState: "home"
        }
    }
    componentDidMount() {

    }
    capitalizeWord = word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    enterLink = link => {
        this.setState({
            navState: link
        })
    }
  render() {
    return (
        <nav className="navbar navbar-light fixed-top">
            <div className="container">
            <a className="navbar-brand" id="banner-title" href="#">Weiran</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active" id="home">
                        <Link className="nav-link" to="/" >home()<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item" id="quiz2">
                        <Link className="nav-link" to="/quizreview" >quiz()</Link>
                    </li>
                    <li className="nav-item" id="resume">
                        <a className="nav-link" href="/resume" >resume()</a>
                    </li>
                    <li className="nav-item" id="contact">
                        <Link className="nav-link disabled" to="/contact" >contact()</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

    )
  }
}

export default Nav
