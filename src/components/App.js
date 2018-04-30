import React, { Component } from 'react';
import '../stylesheets/App.css';
import {UsernameForm} from "./UsernameForm";

class App extends Component {
    render() {
        return (
            <div>
                <UsernameForm name="" action="gettopartists" period="7days" limit="5"/>
            </div>
        );
  }
}

export default App;
