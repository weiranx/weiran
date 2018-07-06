import React, {Component} from 'react'
import './Contact.css'

import axios from 'axios'
import serialize from 'form-serialize'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={7}
        defaultCenter={{ lat: 32.878412, lng: -117.230022 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 32.878412, lng: -117.230022  }} />}
    </GoogleMap>
))

class Contact extends Component {

    handleFromSubmit(evt) {
        evt.preventDefault()

        var obj = serialize(evt.target, {hash: true})

        const secret = "6LfNEkYUAAAAAK2MI8CwIsXVZdFed3DD4kIPe555"
        const url = "https://www.google.com/recaptcha/api/siteverify"

        axios.post(url, {
            "secret": secret,
            "g-recaptcha-response": obj["g-recaptcha-response"]
        }).then(res => {
            if (res.data.success === true) {
                evt.target.reset()
                alert("Submitted. We'll get in touch soon")
            } else {
                alert("Auth failed!")
            }
        }).catch(err => {
            alert("Capcha failed")
        })

    }
    render() {
        return (
            <div className="Contact container">
                <h1>Contact</h1>
                <div className="row">
                    <div className="contact-info col-lg-6 ">
                        <h6>Name: Weiran Xiong</h6>
                        <h6>Email: weiranxiong@gmail.com</h6>

                        <MyMapComponent
                            isMarkerShown
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4p6RtDv-ZValmZn9iw_aFt7abR-5n-KQ&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />

                    </div>
                    <div className=" col-lg-5 offset-lg-1" >
                        <form className="contact-form" onSubmit={this.handleFromSubmit}>
                            <h5>Your Info</h5>
                            <div className="form-group">
                                <label>Name (Required)</label>
                                <input required type="text" className="form-control" id="nameInput" placeholder="Enter Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email (Required)</label>
                                <input required type="email" className="form-control" id="emailInput" placeholder="Enter Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="phone" className="form-control" id="phoneNumberInput" placeholder="Enter Your Phone Number" />
                            </div>
                            <div className="form-group">
                                <label>Message (Required)</label>
                                <textarea required type="text" className="form-control" id="messageInput" placeholder="Leave your message here......" />
                            </div>
                            <div class="g-recaptcha" data-sitekey="6LfNEkYUAAAAACw1AxlQlYXeYZMo9cYcMhfFy1Kh"></div>
                            <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact