import React, { Component } from 'react'

export class UserTopArtists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            topartists: [],
            image: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.state.name = props.name

    }

    handleChange(event) {
        this.state.name = this.props.name
        this.setState({name: event.target.value});
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

            <ul>
                {topartists.map(artist => (
                    <li key={artist.name}>
                        <img src={artist.image[1]['#text']}/>
                        {""} {artist.name}{" - "}{artist.playcount}{" plays in 7 days"}
                    </li>

                ))}
            </ul>

        );
    }
}