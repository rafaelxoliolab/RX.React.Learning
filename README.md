## Starting programing with React

This is a basic example for starting with basic programming with React.

## Pre-requisitos
* HTML, CSS
* Javascript
* DOM
* Node, NPM, YARN

## Setup environment

### Installing tools for coding

* Visual Studio Code
  * Extensions:
    * Bracket Pair Colorized (Colorizes the code of React)
    * ES7+ React/Redux/React-NAtive snippets (Snippets for React code)
    * ES Lint (Indent code)
    * GitLens
    * HTML Snippets
    * Intellisense for CSS Class name in HTML
    * Material Icon Theme (Add Icons for different file types)
    * Path Intellisense
    * Pretty code formatter
    * React Native Tools
    * Simple React Snippets
    * Typescript React code Snippets
    * vscode-styled-components (autocomplete react code)
* Sublime

### Installing NodeJs and Yarn
* Download NodeJs installer from nodejs.org
  * Run setup
  * Validate with command `node -v`

* Download from classic.yarnpkg.com


## Overview

React points:
* JS library
* Opensource
* React is not a framework
* UI in frontend
* React reutilize components

React advantages:
* Dynamic Virtual DOM
* ES6
* Scalability
* React Native to create mobile aplications
* Used by Google, Tesla among others


## Create a React App

1. Open a command window
2. run command `npx create-react-app my-app`
3. move into the app folder `cd my-app`
4. run command `npm start`

### Enable extensions

1. Go to Options in Chrome
2. Select Extensions
3. Open Chrome Web Store
4. Search for `React Developer Tools`
5. Add to Chrome

### JSX
* Legibility
* Renderable
* Use js code in expressions, html code, attributes

### Components

We have class components and functional components.
 
#### Adding a Component
1. Create a new folder named `components` into the `src` folder
2. Add a new file named `Welcome.js` into the `components` folder
3. Add a default function into the new file `Welcome.js`

```react
import React from 'react';

export default function welcome(){
    return (
       <div>
        <p>Welcome to React</p>
        </div>
    );
}
```

### Hooks

#### UseState
