import React, {Component} from 'react'
import './Quiz2.css'


import ReactMarkdown from 'react-markdown'
import axios from 'axios'

class Quiz extends Component {
    constructor() {
        super()
        this.state = {
            quizMarkdownData: "",
            quizNum: 1,
            dataUrl: ""
        }
    }
    componentDidMount() {
        this.setState({
            dataUrl: "https://raw.githubusercontent.com/weiranx/cse12_quiz2/master/quiz"+this.state.quizNum+".md"
        })
        axios.get(this.state.dataUrl).then(res => {
            this.setState({
                quizMarkdownData: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="Quiz2 container">
                <ReactMarkdown source={this.state.quizMarkdownData} />
            </div>
        )
    }
}

export default Quiz2