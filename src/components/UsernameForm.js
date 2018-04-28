import React, { Component } from 'react'
import '../stylesheets/App.css';


export class UsernameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            topartists: [],
            image: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        this.setState({name: event.target.value});
        this.componentDidMount();
        event.preventDefault();
    }

    componentDidMount() {
        fetch("http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=" + this.state.name + "&api_key=9c8b2e5697dab4cd4e70e2c5f17a98dc&limit=10&period=7day&format=json")
            .then(res => res.json())
            .then(
                (artist) => {
                    this.setState({
                        topartists: artist.topartists.artist
                    });
                },
            )
    }

    render() {
        const { topartists } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.name} placeholder="last.fm username" onChange={this.handleChange}/>
                    </label>
                </form>

                <div className="topresults">
                    {topartists.map(artist => (
                        <div>
                            <img src={artist.image[2]['#text']}/>
                            <p> {artist.name}{" - "}{artist.playcount}{" plays in 7 days"} </p>
                        </div>
                    ))}
                </div>


            </div>
        );
    }
}
