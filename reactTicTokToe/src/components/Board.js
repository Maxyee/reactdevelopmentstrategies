import React, {Component} from 'react';

// component section
import Square from './Square';


class Board extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }


    renderSquare(i){
        return <Square value={this.state.squares[i]}/> ;
    }
    
    render(){

        const status = 'Next player: X';

        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div className="board-row">
                    
                </div>
                <div className="board-row">
                    
                </div>
            </div>
        );
    }
}

export default Board;