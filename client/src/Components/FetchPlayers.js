import React from "react";
import axios from 'axios';

export default class FetchPlayers extends React.Component{
    
    _isMounted = false;

    state ={
        players: []
    };

    componentDidMount(){
        this._isMounted = true;

        axios.get("http://localhost:5000/api/players")
            .then(result => {                
                if (this._isMounted){
                    this.setState({
                        isLoading: false,
                        players: result.data })
                    }
            })           
            }

    componentWillUnmount() {
        this._isMounted = false;
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