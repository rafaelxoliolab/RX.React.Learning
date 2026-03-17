//JS Basics

//Function declaration
function getHello(){

    //variables
    let day = "Thursday";

    //using interpolation
    console.log(`Hello, today is ${day}`);
}

//REST Operator (...)
function myRESTFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

// Spread Operator
function expandingArray(){
    const myArray= [1,2,3];
    console.log(...myArray);
}
function combiningArrays(){
    const myArrayOne= ["one","two","three"];
    const myArrayTwo= ["four","five","six"];
    const result = [...myArrayOne, ...myArrayTwo];
    console.log(result);
}
function copyingArrays(){
    const myArray= ["one","two","three"];
    const myCopy= [...myArray];
    console.log(myCopy);
}
function copyingObjects(){
    const person= {name:"Rafael",lastname:"Xolio"};
    const myCopy= {...person};
    console.log(myCopy);
}
function copyingObjectsAndAdd(){
    const person= {name:"Rafael",lastname:"Xolio"};
    const myCopy= {...person, country:"Mexico"};
    console.log(myCopy);
}

//arrow functions
const myArrowFunction=(message)=>{
    console.log(`${message}`);
};

const arrowHelloWorld = () =>{
 console.log(`Hello world`);
};

const arrowCombArray=()=>{
    console.log("arrowCombArray");

    let myArrayOne = [1,2,3];
    let myArrayTwo=[4,5,6];

    console.log(...myArrayOne,...myArrayTwo);
};

const arrowCopyObject=()=>{
    let myObject={name:'Rafael', lastname:'Xolio'};
    let myCopy={...myObject, city:"Mty"};

    console.log('arrowCopyObject');
    console.log(myCopy);
};

const arrowFind=()=>
{
    let myArrayOne = [1,2,3];
    console.log(myArrayOne.find(e=> e==2));
}

/* getHello();
myArrowFunction('using my arrow');
myRESTFun("one", "two", "three", "four", "five", "six");
expandingArray();
combiningArrays();
copyingArrays();
copyingObjects();
copyingObjectsAndAdd();
arrowHelloWorld();
arrowCombArray();
arrowCopyObject(); */
arrowFind();