import React, {Component} from 'react';
import Game from './Game';

class Gameresource extends Component{

    render(){
        const gameinfo = {name: 'Mafia', release: 1998 }

        return(
            <div>
                <h1>From this page we can see the game name and its release year !</h1>
                <Game resource={gameinfo}></Game>
            </div>
        );
    }
}

export default Gameresource;