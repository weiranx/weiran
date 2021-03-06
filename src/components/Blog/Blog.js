import React, {Component} from 'react'
import './Blog.css'
import NotFound from "../NotFound/NotFound.js"

import Disqus from 'disqus-react';

import serialize from 'form-serialize'

import {
    Link
} from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import axios from 'axios'

class Blog extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            markdownData: "",
            loadSuccess: false,
            resourceName: ""
        }
    }
    componentDidMount(props) {
        const resourceName = this.props.match.params.resource
        this.getData(resourceName)
    }

    componentWillReceiveProps(nextProps) {
        const resourceName = nextProps.match.params.resource
        this.getData(resourceName)
    }

    getData(resourceName) {
        const dataUrl = "https://cdn.rawgit.com/weiranx/cse12_"+resourceName+"/master/"+ resourceName+".md"
        axios.get(dataUrl).then(res => {
            this.setState({
                markdownData: res.data,
                loadSuccess: true,
            })
        }).catch(err => {
            this.setState({
                loadSuccess: false
            })
        })
        this.setState({
            resourceName: resourceName
        })
    }
    onSearchSubmit(evt) {
        evt.preventDefault()
        var obj = serialize(evt.target, {hash: true})
        var resName = obj['resourceInput']
        this.getData(resName)
    }

    render() {
        const disqusConfig = {
            url: "https://weiranxiong.me",
            identifier: this.state.resourceName,
            title: this.state.resourceName
        }

        return (
            <div className="Blog container">
                <div className="resource-selector">
                    <h6>Select a resource: </h6>
                    <Link to="/blog/quiz1">quiz1</Link>
                    <Link to="/blog/quiz2">quiz2</Link>
                    <Link to="/blog/quiz3">quiz3</Link>
                    <Link to="/blog/quiz4">quiz4</Link>
                    <Link to="/blog/quiz5">quiz5</Link>

                    <form className="search-form" onSubmit={this.onSearchSubmit}>
                        <h6>Or enter a resource name: </h6>
                        <input type="text" name="resourceInput" className="form-control" id="resourceInput" placeholder="Resource name" />
                        <button type="submit" className="btn btn-sm btn-primary">Search</button>
                    </form>
                </div>
                <h1> {this.state.resourceName} Review </h1>
                { (this.state.loadSuccess)
                    ? <ReactMarkdown source={this.state.markdownData} />
                    : <NotFound />
                }
                <Disqus.DiscussionEmbed shortName="test" config={disqusConfig} />
            </div>
        )
    }
}

export default Blog