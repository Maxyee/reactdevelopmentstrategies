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