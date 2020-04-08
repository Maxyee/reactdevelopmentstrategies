import React from 'react';
import Mobile from './components/Mobile';
import './App.css';


function App() {

  const mobileInfo = {name: 'Iphone', model: 'ip7'}

  return (
    <div className="App">
      <h1>Hello World (App component)</h1>
      <Mobile resource={mobileInfo}></Mobile>
    </div>
  );
}

export default App;
