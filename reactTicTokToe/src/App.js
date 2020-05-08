import React from 'react';


// components section
import Game from './components/Game';



// css section
import './assets/tictoc.css';


function App() {

  return (
    <div className="App">
      <div>
        <p>React Documentation Tic Toc Toe</p>
        <Game></Game>
      </div>     
    </div>
  );
}

export default App;
