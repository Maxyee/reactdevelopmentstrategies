## Function Component Props

For running this project, we just need to run only two command from our project directory.

One:

`npm install`

this command will install all the necessary library for this project.

Two:

`npm start`

This command will start our project. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Main topic discussion

here in this folder or project I tried to understand how `Props` work in reactjs. What I understand is that, if i want to 
pass data one component to another then i should use this props element. This props can pass single data as well as multiple object into the component.

Into my `App.js` file I write some code and also called another component called `Mobile.js` . My task is that, I will pass 
some data from my App.js component to Mobile.js component in a functional way.

Now `App.js` Component Code ...

```
import React from 'react';
import Mobile from './components/Mobile';
import './App.css';
import Gameresource from './classComponents/Gameresource';

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

```
And Mobile.js Component Code ...

```
import React from 'react';


function Mobile(props) {
  return (
    <div>
        <h2>Hello Mobile (Mobile component)</h2>

        <h4>(name props object) Mobile name : {props.resource.name}</h4>

        <h5>(model props object)Mobile model: {props.resource.model}</h5>
    </div>
  );
}

export default Mobile;

```







