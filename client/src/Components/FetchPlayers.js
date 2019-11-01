import React from "react";
import axios from 'axios';

export default class FetchPlayers extends React.Component{
    state ={
        players: []
    };

    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
            .then(result => {
                console.log(result)
                this.setState({
                    players: result.data
                });
            })
    }

    render(){
        // console.log(this.state)
        return(
            <>
                {this.state.players.map(player => (
                    <div key = {player.id} className="PlayerCard">
                        <h2>Name: {player.name}</h2>
                        <h3>Nationality: {player.country}</h3>
                        <h3>Searches: {player.searches}</h3>
                    </div>
                ))}
            </>            
        )
    }
}