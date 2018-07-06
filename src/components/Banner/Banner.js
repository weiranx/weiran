import React, {Component} from 'react'
import './Banner.css'

import {withRouter} from 'react-router-dom'


class Banner extends Component {

    constructor(params, context) {
        super(params, context)
        this.state = {
            navStr: "weiran.aboutme()"
        }
    }
    componentDidMount = () => {
        this.setNavStr(this.props)
    }


    componentWillReceiveProps = (nextProps) => {
        this.setNavStr(nextProps)
    }

    setNavStr = (props) => {
        var navStr = "weiran"
        const pathStr = props.location.pathname.substring(1)

        if(pathStr !== "") {
            navStr +=   "." + pathStr.replace("/",".") + "()"
        } else {
            navStr += ".aboutme()"
        }

        this.setState({
            navStr: navStr
        })
    }


    render() {
        return (
            <div className="Banner">
                <div className="banner-bg">
                    <h1 className="banner-title" id="title">{this.state.navStr}</h1>
                </div>
            </div>
        )
    }
}

export default withRouter(Banner)