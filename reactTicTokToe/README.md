# Tic Toc Toe Game React Knowledge

## Available Scripts

For installing node dependencies In the project directory

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Concepts

```js
import React from 'react';

// components section
import Board from './components/Board';

// css section
import './assets/tictoc.css';

function App() {

  return (
    <div className="App">
      <div>
        <p>React Documentation Tic Toc Toe</p>
        <Board></Board>
      </div>     
    </div>
  );
}

export default App;

```

Board Js file 

```js
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

```

Function that will call square components with props value to that component

```js
renderSquare(i){
    return <Square value={this.state.squares[i]}/> ;
}

```

we need nine box for playing this game so for initiazling the number of box, I need to write this into the state

```js
constructor(props){
    super(props);
    this.state = {
        squares: Array(9).fill(null),
    }
}

```




