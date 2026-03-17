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
};

const arrowFindIndex=()=>
{
    let myArrayOne = [1,2,3];
    console.log(myArrayOne.findIndex(e=> e==2));
};

const arrowFindObject=()=>{
    let myList=[
    {id:1, name:"Student1"},
    {id:2, name:"Student2"},
    {id:3, name:"Student3"}
    ];

    console.log(myList.find((e)=>e.id==2));
};
const arrowFilterObject=()=>{
    let myList=[
    {id:1, name:"Student1"},
    {id:2, name:"Student2"},
    {id:3, name:"Student3"}
    ];

    console.log(myList.filter((e)=>e.id!=2));
};

const arrowSortNumbers=()=>
{
    let myArrayOne = [20,14,3,55,29];
    console.log(myArrayOne.sort());
};

const arrowSortNumbersAsc=()=>
{
    let myArrayOne = [20,14,3,55,29];
    console.log(myArrayOne.sort((a,b)=>a-b));
};


const arrowSortNumbersDesc=()=>
{
    let myArrayOne = [20,14,3,55,29];
    console.log(myArrayOne.sort((a,b)=>b-a));
};

const arrowSortText=()=>
{
    let myArray = ['Banana', 'Orange', 'Grapes','apple'];
    console.log(myArray.sort());
    console.log(myArray.sort((a,b)=>a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())));
};

const arrowForEach=()=>
{
    let myArray = ['Banana', 'Orange', 'Grapes','apple'];
    myArray.forEach((item)=>
    { 
        console.log(item.toLocaleUpperCase());
    }
    );
};

const arrowMap=()=>
{
    let myArrayOne = [20,14,3,55,29];
    let myArrayMap= myArrayOne.map((item)=>item * 2);

    console.log(myArrayMap);
};

const arrowMapObject=()=>
{
    let myList=[
    {id:1, name:"Student1"},
    {id:2, name:"Student2"},
    {id:3, name:"Student3"}
    ];

    let myArrayMap= myList.map((item)=>item.name);

    console.log(myArrayMap);
};

const arrowMapObjectList=()=>
{
    let myList=[
    {id:1, name:"Student1"},
    {id:2, name:"Student2"},
    {id:3, name:"Student3"}
    ];

    let myArrayMap= myList.map((item)=>{
        return{
            id:item.id+1,
            name: item.name
        }
    });

    console.log(myArrayMap);
};

//add to the end
const arrowPush=()=>
{
    let myArray = [20,14,3,55,29];
    myArray.push(8);
    console.log(myArray);
};

//Add to the beginning
const arrowUnshift=()=>
{
    let myArray = [20,14,3,55,29];
    myArray.unshift(8);
    console.log(myArray);
};

const arrowSplice=()=>
{
    let myArray = [20,14,3,55,29];
    myArray.splice(2,0,8);
    console.log(myArray);
};

//remove the end item
const arrowPop=()=>
{
    let myArray = [20,14,3,55,29];
    myArray.pop();
    console.log(...myArray);
};

//remove the first item
const arrowShift=()=>
{
    let myArray = [20,14,3,55,29];
    myArray.shift();
    console.log(...myArray);
};
const arrowSpliceDel=()=>
{
    let myArray = [20,14,3,55,29];
    myArray.splice(2,1);
    console.log(myArray);
};

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
arrowCopyObject(); 
arrowFind();
arrowFindIndex();
arrowFindObject();
arrowFilterObject();
arrowSortNumbers();
arrowSortNumbersAsc();
arrowSortNumbersDesc();
arrowSortText();
arrowForEach();
arrowMap();
arrowMapObject();
arrowMapObjectList();
arrowPush();
arrowPop();
arrowUnshift();
arrowShift();*/
arrowSplice();
arrowSpliceDel();