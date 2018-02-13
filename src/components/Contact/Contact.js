import React, {Component} from 'react'
import './Contact.css'


class Contact extends Component {
    render() {
        return (
            <div className="Contact container">
                <h1>Contact</h1>
                <div className="row">
                    <div className="contact-info col-lg-6">
                        <h6>Name: Weiran Xiong</h6>
                        <h6>Email: weiranxiong@gmail.com</h6>


                    </div>
                    <div className="contact-form col-log-6">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" id="nameInput" placeholder="Enter Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" id="emailInput" placeholder="Enter Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" className="form-control" id="phoneNumberInput" placeholder="Enter Your Phone Number" />
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact