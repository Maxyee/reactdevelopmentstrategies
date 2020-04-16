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

Thirdly, if we want to load a specific bootstrap version then we can use the CDN version into our project. Just open the `public/index.html` file from the project and add the CDN link there.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
    <!--Add this line into your project for enabling the CDN-->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.
      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.
      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.
      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->

  </body>
</html>

```

Finally, here is the `App.js` file code, how I implement the line into my project.

```js

import React from 'react';
import Navbar from './components/Navbar';


import 'bootstrap/dist/css/bootstrap.min.css';   // add this line

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
