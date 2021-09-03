import React, { Component } from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';

class ContactPage extends Component {
    state = {
        value: "",
        isEmpty: true,
    }

    handleChange = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false
            })
        } else {
            this.setState({
                value: e.target.value,
                isEmpty: true
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: "",
            isEmpty: true
        })
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Contact</h3>
                    <div>For all enquires, please email us using the form below</div>
                    <textarea
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Type your message here..."
                    ></textarea>
                    <button className="close">Send</button>
                </form>
                <Prompt
                    // when={!this.state.value}
                    when={!this.state.isEmpty}
                    message="Are you sure you want to leave? You did not submit the form"
                />
            </div >);
    }
}

export default ContactPage;