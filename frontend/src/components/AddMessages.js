import React, { Component } from 'react';

export default class AddMessages extends Component {
    
    constructor(props){
        super(props);
        this.state = {  destination_number: '',
                        message: '',
                        status: ''  };

        this.handleChange = this.handleChange.bind(this); 
        this.submitMessage = this.submitMessage.bind(this);               
    }

    handleChange = (event) => {
            const target = event.target;
            const value  = target.value;
            const name = target.name;

        this.setState({[name]:value});
      }
    
    submitMessage = (event) => {

        event.preventDefault();
        
        // alert('A form was submitted: ' + this.state.destination_number);
        // alert('A form was submitted: ' + this.state.message);
        // alert('A form was submitted: ' + this.state.status);


        
        fetch("/api/messages", {
            method: "POST",
            // We convert the React state to JSON and send it as the POST body
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response)
            return response.json();
          });

          window.location.reload();
        
    }


    render() {
        return (
             
                <form  onSubmit={this.submitMessage}>
                
                    <label>
                        Destination Number:
                        <input type="text" value={this.state.destination_number} name="destination_number" onChange={this.handleChange}  />
                    </label> 
                    <label>
                         Message:
                        <input type="text" value={this.state.message} name="message" onChange={this.handleChange}  />
                    </label>
                    <label> 
                        Status:
                    <input type="text" value={this.state.status} name="status" onChange={this.handleChange}  />
                    </label>
                
                    <input type="submit" value="Submit"/>
               
                </form>
            
        );
    }
}