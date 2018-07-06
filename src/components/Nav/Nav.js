import React, { Component } from 'react'
import './Nav.css'
import {
    Link
} from 'react-router-dom'

class Nav extends Component {
    constructor(params, context) {
        super(params, context)
        this.state = ({
            homeActive: false,
            reviewActive: false,
            resumeActive: false,
            contactActive: false
        })
    }

    setHomeActive = (evt) => {
        evt.preventDefault()
        this.setState({
            homeActive: true,
            reviewActive: false,
            resumeActive: false,
            contactActive: false
        })
    }

    setReviewActive = (evt) => {
        evt.preventDefault()
        this.setState({
            homeActive: false,
            reviewActive: true,
            resumeActive: false,
            contactActive: false
        })
    }

    setResumeActive = (evt) => {
        evt.preventDefault()
        this.setState({
            homeActive: false,
            reviewActive: false,
            resumeActive: true,
            contactActive: false
        })
    }

    setContactActive = (evt) => {
        evt.preventDefault()
        this.setState({
            homeActive: false,
            reviewActive: false,
            resumeActive: false,
            contactActive: true
        })
    }


  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
            <a className="navbar-brand" id="banner-title" href="#">Weiran</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-right" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className={"nav-item "+ this.state.homeActive === true ? "active" : ""} id="home">
                        <Link className="nav-link" to="/" >home()<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className={"nav-item "+ this.state.reviewActive === true ? "active" : ""} id="cse12review">
                        <Link className="nav-link" to="/cse12review" >cse12Review()</Link>
                    </li>
                    <li className={"nav-item "+ this.state.resumeActive === true ? "active" : ""} id="resume">
                        <Link className="nav-link" to="/resume" >resume()</Link>
                    </li>
                    <li className={"nav-item "+ this.state.contactActive === true ? "active" : ""} id="contact">
                        <Link className="nav-link" to="/contact" >contact()</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

    )
  }
}

export default Nav
