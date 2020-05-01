# React Hooks

## Simple Introduction with hook code.

```js
import React, { useState } from 'react';



function IntroHooks(){

    const [count, setCount] = useState(0);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default IntroHooks;

```
Into this code section, we can see that I define a line which I mention below, here the besically main hook
concept is running. Here `count` is a variable and `setCount` is a function. By using the `useState` I initialized both value
to zero 0.

```js
const [count, setCount] = useState(0);

```
So finally into the component return section, we can use the `setCount` function for updating the `count` variable value
in real time.


## Simple State Hook.

```js
import React, { useState } from 'react';

function StateHook(){

    const [count, setCount] = useState(0);

    const [age, setAge] = useState(5);

    const [fruit, setFruit] = useState('banana');

    const [todos, setTodos] = useState([{ text: 'Learn Hooks'}]);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>
                Click me
            </button>

            <p>Showing age from state = {age}</p>
            <button onClick={()=> setAge(27)}>
                Click to Show actual age
            </button>

            <p>Write your fruite name it will update the name</p>
            <p>Fruit = {fruit}</p>
            <input onChange={() => setFruit(fruit)} />

            <p>todolist</p>
            <ul>
                <li>
                    {todos.text}
                </li>
                <li>
                    <button onClick={()=>setTodos([{text: 'hello Julhas'}])}>
                        Click change value
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default StateHook;

```
same concept as Intoduction hook which I write above, here is the example how we can use this hook in different way into the component. Below line is the main focus for `StateHook` file.

```js

  const [count, setCount] = useState(0);

  const [age, setAge] = useState(5);

  const [fruit, setFruit] = useState('banana');

  const [todos, setTodos] = useState([{ text: 'Learn Hooks'}]);

```



