
import React, { Component } from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'



import Nav from './components/Nav/Nav.js'
import Banner from './components/Banner/Banner.js'
import Aboutme from './components/Aboutme/Aboutme.js'
import Contact from './components/Contact/Contact.js'
import QuizReview from './components/QuizReview/QuizReview.js'
import NotFound from "./components/NotFound/NotFound.js";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Banner />
                <Switch>
                <Route exact path="/" component={Aboutme} />
                <Route path="/contact" component={Contact} />

                <Route path={"/quizreview/:quizNum"} component={QuizReview} />
                    <Route path={"/quizreview"} component={QuizReview} />
                <Route path={"*"} component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App
