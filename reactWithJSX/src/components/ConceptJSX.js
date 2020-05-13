import React from 'react';
import '../App.css';

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

    const userfullName = 'User Full Name';

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
                    fullName(user)
                }
            </div>
            
        </div>
    );
}


export default ConceptJSX;