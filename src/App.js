
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
import Blog from './components/Blog/Blog.js'
import NotFound from "./components/NotFound/NotFound.js"
import Resume from "./components/Resume/Resume.js"

class App extends Component {
  render(props) {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Banner />
                <Switch>
                    <Route exact path="/" component={Aboutme} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                    <Route path={"/blog/:resource"} component={Blog} />
                        <Route path={"/blog"} component={Blog} />
                    <Route path={"*"} component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App
