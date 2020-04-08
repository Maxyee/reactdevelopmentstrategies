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
Into this code section I define a variable `mobileInfo` and into this variable i define two object one is `name` and another is `model`

`const mobileInfo = {name: 'Iphone', model: 'ip7'}`

After that I pass this `mobileInfo` variable value to another component called `Mobile` as a `resource` attribute

`<Mobile resource={mobileInfo}></Mobile>`

Finally I added the Mobile component file directory path on the top of this file

`import Mobile from './components/Mobile';`

Now the App.js file work is done. Let's see how we can handle the passing data to our Mobile Component.

Mobile.js Component Code ...

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
Here into this component, At first I fetch those data using `props`. Now I am following the functional component procedure.
In this procedure, I have to pass the props through the function parameter.

`function Mobile(props)`

Now whole function can recognize what is the value of that props. After that I define the data of that props like this way

```
        <h4>(name props object) Mobile name : {props.resource.name}</h4>

        <h5>(model props object)Mobile model: {props.resource.model}</h5>

```

here `{props.resource.name}` this will return the value `Iphone`.

and `{props.resource.model}`this will return the value `ip7`.


That's All what I know and how I work with props for functional components.



