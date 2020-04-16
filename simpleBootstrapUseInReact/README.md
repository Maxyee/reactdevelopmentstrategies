# How to use simple bootstrap components into React project

In this section, I will discuss how to use existing template which is using bootstrap to implement in react project.

However, There is another feature can find in React which is called react-bootstrap. It has its own component and other utilities but In this section I am not using that facilities. I am using the old way to convert the boostrap code into my React project.

At first, We need to install a `react project` as well as the `bootstrap feacture` into our machine. I have already discussed how to install React project in my another folder of this repository. If you want to follow, you can do that. link is given below:

- [How to install React Project](https://github.com/Maxyee/reactdevelopmentstrategies/tree/master/installReactProject)


## My installation process react-bootstrap (old version)

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

Fourthly, if we follow the CDN process, we should not implement this line into our `App.js` file. Otherwise, without using CDN process here is the `App.js` file code, how I implement the line into my project.

```js

import React from "react";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css"; // add this line into your project

function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;

```
Finally, open the `index.html` file from your project. you can find it `public/index.html` this directory. And add the three Scripts line which is provided by the bootstrap website [BootstrapWebsite](https://getbootstrap.com/docs/4.4/getting-started/introduction/) into the JS section.

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
    <!-- Add this three line into your project -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>

```
That's all, now we can use all the components and layout of simple bootstrap into our project.

## Here is the simple Project for getting clear IDEA !

- [SimpleProject](https://github.com/Maxyee/reactdevelopmentstrategies/tree/master/simpleBootstrapUseInReact/sampleProject)
