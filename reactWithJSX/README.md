# React With JSX Concept Code

```js
import React from 'react';
import '../App.css';


import imgUrlOne from '../assets/imges/winnerName.png';

function ConceptJSX(){

    const name = 'Julhas JSX';

    const element = <h1>Hello {name}</h1>

    // now I will create a function which will take two object firstname and lastname
    function fullName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Julhas',
        lastName: 'Hossain'
    }

    const user2 = {
        firstName: 'Julhas',
        lastName: 'Hossain'
    }

    const imageCollection = {
        imageOne: imgUrlOne,
        imageTwo: '../assets/imges/winnerName.png',
    }

    function getGreeting(user){
        if(user){
            return <h1>Hello, {fullName(user2)}</h1>
        }
        else{
            return <h1>Hello, Stranger</h1>
        }
    }

    const userfullName = 'User Full Name';

    // calling a image using JSX

    const imageElement = <img src={imageCollection.imageOne} alt='images'></img>

    const imageElement2 = <img src={imageCollection.imageTwo} alt='images'></img>

    return(
        <div>
            <div className='headingJSX'>
                {element}
            </div>

            <div>
                <h3>{userfullName} from the function</h3>
                <hr/>
                <p>output = {fullName(user)}</p>
            </div>

            <div>
                <p>This is user expression section</p>
                {
                    getGreeting(user)
                }
            </div>

            <div>
                At first I import the picture at the top into this file 
                then I called it to the imageCollection object. thats why It is working perfectly.
                {imageElement}
            </div>

            <div>
                calling the image directly from the object. it will not work.
                so we have to import picture otherwise it will not work directly from object.
                {imageElement2}
            </div>

            
        </div>
    );
}


export default ConceptJSX;

```
