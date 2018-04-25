import React, { Component } from 'react'
import {UserTopArtists} from "./UserTopArtists";
import ReactDOM from 'react-dom';


export class UsernameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        ReactDOM.render(<UserTopArtists name={this.state.name} />, document.getElementById('root'));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <textarea value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <UserTopArtists name={this.state.name}/>
            </div>
        );
    }
}