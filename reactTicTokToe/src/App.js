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
