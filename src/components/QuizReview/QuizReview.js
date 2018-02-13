import React, {Component} from 'react'
import './QuizReview.css'
import NotFound from "../NotFound/NotFound.js";

import {
    Link
} from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import axios from 'axios'

class QuizReview extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            quizMarkdownData: "",
            loadSuccess: false,
            quizNum: props.match.params.quizNum
        }
    }
    componentDidMount(props) {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            quizNum: nextProps.match.params.quizNum
        })
    }

    render() {
        const dataUrl = "https://raw.githubusercontent.com/weiranx/cse12_quiz"+this.state.quizNum+"/master/quiz"+
            this.state.quizNum+".md"
        axios.get(dataUrl).then(res => {
            this.setState({
                quizMarkdownData: res.data,
                loadSuccess: true
            })
        }).catch(err => {
            this.setState({
                loadSuccess: false
            })
        })
        return (
            <div className="QuizReview container">
                <div className="quiz-selector">
                    <h6>Select a quiz number </h6>
                    <Link to="/quizreview/1">quiz1</Link>
                    <Link to="/quizreview/2">quiz2</Link>
                    <Link to="/quizreview/3">quiz3</Link>
                    <Link to="/quizreview/4">quiz4</Link>
                    <Link to="/quizreview/5">quiz5</Link>
                </div>
                <h1>Quiz {this.state.quizNum} Review </h1>
                { (this.state.loadSuccess)
                    ? <ReactMarkdown source={this.state.quizMarkdownData} />
                    : <NotFound />
                    }
            </div>
        )
    }
}

export default QuizReview