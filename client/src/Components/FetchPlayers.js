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
        console.log(this.state)
        return(
            <div>

            </div>
        )
    }
}