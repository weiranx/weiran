import React, {Component} from 'react'
import './Resume.css'

import {Link} from 'react-router-dom'

import { Document, Page } from 'react-pdf'


class Resume extends Component {
    constructor(props) {
        super(props)
        this.resumeSec = React.createRef()
        this.state = {
            pageNumber: 1,
            resumeUrl: "/resume.pdf",
            resumeWidth: 0
        }
    }
    componentDidMount() {
        console.log(this.resumeSec.current.clientWidth)
        this.setState({
            resumeWidth: this.resumeSec.current.clientWidth
        })
    }
    

    render() {

        const { pageNumber, resumeUrl } = this.state

        return (
            <div className="container">
            <div ref={this.resumeSec} className="Resume">

                <a href={resumeUrl} className="download-link" >Download</a>
                <Link to="/contact" className="hireme-link">Hire me!</Link>

                <div className="resume-content">
                    <Document file={resumeUrl}>
                        <Page pageNumber={pageNumber} width={this.state.resumeWidth}/>
                    </Document>
                </div>
            </div>
            </div>
        )
    }
}

export default Resume