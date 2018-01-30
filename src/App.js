
import React, { Component } from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



import Nav from './components/Nav/Nav.js'
import Banner from './components/Banner/Banner.js'
import Aboutme from './components/Aboutme/Aboutme.js'
import Contact from './components/Contact/Contact.js'
import Quiz2 from './components/Quiz2/Quiz2.js'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Banner />
                <Route exact path="/" component={Aboutme} />
                <Route path="/contact" component={Contact} />
                <Route path="/quiz2" component={Quiz2} />
            </div>
        </Router>
    );
  }
}

export default App
