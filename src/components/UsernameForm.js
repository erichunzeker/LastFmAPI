import React, { Component } from 'react'
import '../stylesheets/App.css';
import {GetResults} from "./GetResults";
import ReactDOM from 'react-dom';



export class UsernameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            action: 'gettopalbums'
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleActionChange = this.handleActionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleActionChange(event) {
        this.setState({action: event.target.value});
    }


    handleSubmit(event) {
        ReactDOM.render(<UsernameForm name={this.state.name} action={this.state.action} />, document.getElementById('root'));

    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.name} placeholder="last.fm username" onChange={this.handleNameChange}/>
                    </label>

                    <select defaultValue="gettopartists" onChange={this.handleActionChange}>
                        <option value="gettopartists">Top Artists</option>
                        <option value="gettopalbums">Top Albums</option>
                    </select>
                </form>


                <GetResults name={this.state.name} action={this.state.action}/>
            </div>

        );
    }
}
