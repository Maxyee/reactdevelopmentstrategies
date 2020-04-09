## Class Component Props

The process is same as function component props. Navigate to the project folder where `package.json` file is located. 
Follow the procedure as I mentioned earlier into my another note. Link is given below :

[Project Install Procedure](https://github.com/Maxyee/reactdevelopmentstrategies/tree/master/functionComponentProps)


After Installing the project, We have to consider three files `App.js` , `Gameresource.js` and `Game.js`  for understanding the class Component props

1. Lets start with the `App.js` file

```js
import React from 'react';
import './App.css';
import Gameresource from './classComponents/Gameresource';

function App() {

  return (
    <div className="App">
      <Gameresource></Gameresource>
    </div>
  );
}

export default App;

```
this is root functional component file for this project. So here I implement another component called `Gameresource` 

```html
   <Gameresource></Gameresource>

```

Also I added the component path on the top of the file like this way

`import Gameresource from './classComponents/Gameresource';`


2. Now lets open the `Gameresource.js` class Component file from the project

```js
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

```
from here we can see that, I define a variable called gameInfo and added two object on that variable with its value.

```js
   const gameinfo = {name: 'Mafia', release: 1998 }

```

Now I will pass the gameInfo values data to another class Component using `props`. The value where I am going to passing it
is the `Game` Component. for passing to `Game` component we have to define it to the code section like this way

```js
   <Game resource={gameinfo}></Game>

```


3. Finally, lets open the `Game.js` class Component file

```js
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

```
here we can see that, I mentioned the props using `this` word which indicated the props of that component. if there is any
props value initialized for this component then it will show, otherwise no props value will show to the user.

```js
   <h2>Game name : {this.props.resource.name}</h2>
   <h3>Game release : {this.props.resource.release}</h3>

```
This two line give me the idea how I will call those value into this class component. That all!! this is the process 
I had done for this project .
