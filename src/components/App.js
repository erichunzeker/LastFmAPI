import React, { Component } from 'react';
import '../stylesheets/App.css';
import {UserTopArtists} from "./UserTopArtists";
import {UsernameForm} from "./UsernameForm";





class App extends Component {
    render() {
        return (
            <div>
                <UsernameForm/>
            </div>
        );
  }
}

export default App;
