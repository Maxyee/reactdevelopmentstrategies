import React from 'react';
import IntroHooks from './components/IntroHooks';
import StateHook from './components/StateHook';
import EffectHook from './components/EffectHook';

function App() {

  return (
    <div className="App">
      <div>
        <p>Inroduction Hook with Click Event</p>
        <hr></hr>
        <IntroHooks></IntroHooks>
        <hr></hr>
      </div>

      <div>
        <p>State Hook More Than Once</p>
        <hr></hr>
        <StateHook></StateHook>
        <hr></hr>
      </div>

      <div>
        <p>Effect Hook More Than Once</p>
        <hr></hr>
        <EffectHook></EffectHook>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
