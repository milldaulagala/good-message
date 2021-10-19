import React, { Component } from 'react';
import SingleMessage from './SingleMessage';
import AddMessages from './AddMessages';

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    componentDidMount() {
        fetch('/api/messages')
        .then(response => response.json())
        .then(data => this.setState({messages: data}))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddMessages />
                </div>
                <div className="row">
                    { this.state.messages.map((item) => (
                        <SingleMessage key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}
