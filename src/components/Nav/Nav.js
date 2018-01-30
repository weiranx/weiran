import React, { Component } from 'react'
import './Nav.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Nav extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll() {
        console.log("Scrolling")
        console.log(document.getElementById("banner-title").offsetTop)
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
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">home()<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">aboutme()</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">resume()</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/contact">contact()</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

    )
  }
}

export default Nav
