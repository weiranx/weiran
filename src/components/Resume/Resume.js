import React, {Component} from 'react'
import './Resume.css'

import {Link} from 'react-router-dom'

import { Document, Page } from 'react-pdf'


class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 1,
            resumeUrl: "https://cdn.rawgit.com/weiranx/resume/b10beb5c/resume.pdf"
        }
    }

    render() {

        const { pageNumber, resumeUrl } = this.state

        return (
            <div className="container">
            <div className="Resume">

                <a href={resumeUrl} className="download-link" >Download</a>
                <Link to="/contact" className="hireme-link">Hire me!</Link>

                <div className="resume-content">
                    <Document file={resumeUrl}>
                        <Page pageNumber={pageNumber} width="700"/>
                    </Document>
                </div>
            </div>
            </div>
        )
    }
}

export default Resume