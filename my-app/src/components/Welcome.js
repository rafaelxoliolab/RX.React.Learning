import React from 'react';
import { useState } from 'react';

export function Welcome(){
    const [counter, setCounter] = useState(0);


    return (
        <div>
        <p>Welcome to React</p>
        <br/>
        <div>The number of counter is {counter}</div>
        <button type='submit' onClick={()=>setCounter(counter+1)}>Sum</button>
        </div>


    );
}

export function WelcomeProps(props){
    const {message} = props;

    return (
      <div>
          <p>Hola {message}</p>
      </div>  

    );
}

export function WelcomeTwoProps(props){
    const{name, message} = props;
    
    return(
        <div>
            <p>Name: {name}</p>
            <p>Message: {message}</p>
        </div>
    );
    
}