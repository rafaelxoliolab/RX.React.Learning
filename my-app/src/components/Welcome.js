import React from 'react';

export function Welcome(){
    return (

        <p>Welcome to React</p>

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