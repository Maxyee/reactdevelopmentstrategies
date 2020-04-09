import React, { Component } from "react"


class Game extends Component{
    render(){
        return(
            <div>
                <h2>Game name : {this.props.resource.name}</h2>
                <h3>Game release : {this.props.resource.release}</h3>
            </div>
        );
    }
}


export default Game;
