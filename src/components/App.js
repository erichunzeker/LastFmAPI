import React, { Component } from 'react';
import '../stylesheets/App.css';
import {UsernameForm} from "./UsernameForm";

class App extends Component {
    render() {
        return (
            <div>
                <UsernameForm />
            </div>
        );
  }
}

export default App;
