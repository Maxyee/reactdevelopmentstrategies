# React Bootstarp
In this section, I will discuss the react-bootstrap. everybody we know what is bootstrap.
However, from my knowledge, I will say that bootstrap is a responsive framework for any web development. 
Imagine that we have a website but it did not adjust in different screen sizes. 
Moreover, for adjusting the screen size and design for any device we need to use bootstrap elements to our existing template. 
After adding those class and bootstrap attributes to our HTML element we can get the responsiveness to our website.

To begin with, we need to install a react project and then we will include the bootstrap library to our react project.
You can follow the instruction on how to install the react project from my other GitHub repository link, I discuss it briefly there.

- [How to install React Project](https://github.com/Maxyee/reactdevelopmentstrategies/tree/master/installReactProject)

After successfully installing our react project, we can follow the instruction on how to install react-bootstrap from this website.

- [How to install React Bootstrap to our Project](https://react-bootstrap.github.io/getting-started/introduction/)

It is best practice to follow this website because if anything new added to the react-bootstrap library we can instantly get the idea from it.

On the other hand, I have followed the way to install bootstrap which I am going to describe it below one by one.

## My installation process react-bootstrap
Firstly, after installing the react project just write this below command from your terminal.

`npm install react-bootstrap bootstrap`

Secondly, open the `App.js` file from your project `src` folder and add the import to the bootstrap CSS file.

`import 'bootstrap/dist/css/bootstrap.min.css';`

Finally, here is the `App.js` file code, how I implement the line into my project.

```js

import React from 'react';
import Navbar from './components/Navbar';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}

export default App;

```
That's all, now we can use all the components and layout of react-bootstrap into our project.
