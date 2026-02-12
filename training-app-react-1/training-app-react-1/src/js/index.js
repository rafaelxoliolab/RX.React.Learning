//JS Basics

//Function declaration
function getHello(){

    //variables
    let day = "Thursday";

    //using interpolation
    console.log(`Hello, today is ${day}`);
}

//arrow functions
const myArrowFunction=(message)=>{
    console.log(`${message}`);
};

const helloWorld = () =>{
 console.log(`Hello world`);
};

getHello();
myArrowFunction('using my arrow');
helloWorld();