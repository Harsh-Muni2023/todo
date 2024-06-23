// document.getElementById("myh").textContent = 'Hello';
// document.getElementById("myp").textContent = 'hi i am harsh of UP';

// let userName = window.prompt("Please enter your username name");
// console.log(userName);

// let username;

// document.getElementById("mysubmit").onclick = function() {
//     username = document.getElementById("myid").value;
//     document.getElementById("age").textContent =  document.getElementById("myage").value ;
//     document.getElementById("text").textContent = username;
//     console.log(username);
// }

// let age = window.prompt("enter age ");
// // age++;
// age = Number(age);
// age+=1;
// // let val = `your age : ${age}`;
// // console.log(val);
// console.log(age);

/* let inital = 0;
document.getElementById("mytop").textContent = inital;
let increase = document.getElementById("inc");
increase.textContent = "increase";
let decrease = document.getElementById("dec");
decrease.textContent = "decrease";
let reset = document.getElementById("reset");
reset.textContent = "reset";


increase.onclick = function() {
    inital++;
    document.getElementById("mytop").textContent = inital;
}

reset.onclick = function() {
    inital = 0;
    document.getElementById("mytop").textContent = inital;
}

decrease.onclick = function() {
    inital--;
    document.getElementById("mytop").textContent = inital;
} */

/* const display = document.getElementById("number");
const cel = document.getElementById("celcius");
const far = document.getElementById("farenhite");
const output = document.getElementById("myresult");
const click = document.getElementById("submit");
let temp = 0;
function convert(){
    if(cel.checked){
        temp = Number(display.value);
        temp = temp * 9 / 5 + 32;
        output.textContent = temp.toFixed() + "F";
    }
    else if(far.checked){
        temp = Number(display.value);
        temp = (temp - 32)*(5/9);
        output.textContent = temp.toFixed() + "C";
    }
    else{
        output.textContent = "select a unit";
    }
} */

/* let length  = 12;
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let symbol = "!@#$%^&*()-+<>?";

let genPassword = '';

while(genPassword.length < length){
    genPassword+= lowerCase[Math.floor(Math.random()*12)] +
                  upperCase[Math.floor(Math.random()*12)] + 
                  number[Math.floor(Math.random()*12)] +
                  symbol[Math.floor(Math.random()*12)];
}

let buttonClick = document.getElementById("onclickbutton");
let display = document.getElementById("mypassword");

buttonClick.onclick =  function(){
    display.value = genPassword;
}
 */

/* let input = document.getElementById("mytodolist");
let buttonOnclick = document.getElementById("onclickbutton");
let output = document.getElementById("mylist");

function toDisplay(){
    if(input.value ===''){
        window.alert("Please enter text");
    }
    else{
        output.textContent+=input.value + "\n";
    }
} */

// callback: funtion passed as an argument to function
// use to handling asynchronous operations
//  -- reading a file,
//  --netwprk req ,
//  --reading database
// .forEach() function with call back use to iterate array

/* function hello(){
    console.log("hello");
}
function goodby(callback){
    console.log("goodby");
    callback();
}
goodby(hello); */

/* function sum(callback,x,y){
    let result = x + y;
    callback(result);
}
function display(result){
    // console.log(result);
    document.getElementById("mytext").innerText = result;

}
sum(display,1,3); */

/* let myArray = [1,2,3,4,5];
let myArray2 = ["harsh","aman","vaibhav","manav"];

function display(elements){
    console.log(elements);
}

myArray.forEach(display);
myArray2.forEach(display); */

// let array = [1,2,3,4,5];
// let myArray2 = ["harsh","aman","vaibhav","manav"];

// function double(element,index,array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//     console.log(element);
// }
// myArray2.forEach(double);
// myArray2.forEach(display);

// array.forEach(display);
// array.forEach(double); //doubling values
// array.forEach(display);
// myArray2.forEach(capitalize);
// myArray2.forEach(display);

// function capitalize(element,index,array){
//     array[index] = element.toUpperCase();  // toLowerCase()
// }

// function double(element,index,array){
//     array[index] = element * 2;
// }

// function display(callback){
//     console.log(callback);
// }

// .map() ---- accepts calback applies to function and return new array

/* const array = [1,2,3,4,5];

let new1 = array.map(square);
let new2 = array.map((element) => {
    return Math.pow(element, 3);
})

console.log(new1);
console.log(new2);

function square(element){
    return Math.pow(element, 2);
} */

/* const array = ["harsh", "square","shivam","manav"];

let new1 = array.map(upper);
let new2 = array.map(lower);
console.log(new1);
console.log(new2);

function upper(element){
    return element.toUpperCase();
}

function lower(element){
    return element.toLowerCase();
} */

// .filter creates new array by filtering out elements

/* const array = [1,2,3,4,5,6,8,20];

let new1 = array.filter(isEven);
console.log(array);
console.log(new1);

function isEven(element){
    return element % 2 ===0;
} */

// .reduce() the lement of the array to single value

/* const price = [10,20,30,50,70];

let new1 = price.reduce(sum);
let new2 = price.reduce(getMax);

console.log(price);
console.log(new1);
console.log(new2);

function sum(acculumator,element){
    return acculumator + element;
}

function getMax(acculumator,element){
    return Math.max(acculumator,element);
} */

// function diferent expressions

/* function sayHello(){
    console.log("Hello");
}
sayHello();
 */

/* let say = function(){
    console.log("Hello");
}
say();
 */

/* let game = () => {
    console.log("Hello");
}
game(); */

// object creation

/* let object = {
    name:"harsh",
    roll_no:73,
    branch:"ECE",
    batch:2023
}
console.log(object.name);
console.log(object.roll_no);
console.log(object.branch);
console.log(object.batch);

console.log(typeof(object));
console.log(object); */

/* function student(name,roll_no,batch){
    this.name = name;
    this.roll_no = roll_no;
    this.batch = batch;
}

const harsh = new student("harsh",73,2023);

console.log(harsh.name);
console.log(harsh.roll_no);
console.log(harsh.batch); */

// class creation

/* class Student{
    constructor(name,roll_no,batch){
        this.name = name;
        this.roll_no = roll_no;
        this.batch = batch;
    }
    displayStudent(){
        console.log(`name:${this.name}`);
        console.log(`roll_no:${this.roll_no}`);
        console.log(`batch:${this.batch}`);
    }
}

const harsh = new Student("harsh",2311401273,2023);

harsh.displayStudent(); */

// date(year month day hour minute second ms )
// Mon Jun 17 2024 17:59:35 GMT+0530 (India Standard Time)

/* const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

console.log(`year : ${year}\nmonth : ${month}\nday : ${day}\nhour : ${hour}\nminute : ${minute}\nsecond : ${second}`);

document.getElementById("year").innerText = year;
document.getElementById("month").innerText;
document.getElementById("day").innerText = day;
// document.getElementById("hour").innerText = hour +':';
if(hour>12){
    if(hour-12>9){
    document.getElementById("hour").innerText =(hour - 12) + ':';
    }
    else{
        document.getElementById("hour").innerText ='0' + (hour - 12) + ':';
    }
}
else if(hour ===11 && hour ===12){
    document.getElementById("hour").innerText =hour + ':';
}
else{
    document.getElementById("hour").innerText ='0' + hour + ':';
}
// document.getElementById("minute").innerText = minute +':';
if(minute<10){
    document.getElementById("minute").innerText = '0' + minute + ':';
}
else{
    document.getElementById("minute").innerText = minute + ':';
}
// document.getElementById("second").innerText = second;
if(second<10){
    document.getElementById("second").innerText = '0' + second ;
}
else{
    document.getElementById("second").innerText = second;
}

switch(month){
        case 1:
            document.getElementById("month").innerText = "january";
            break;
        case 2:
            document.getElementById("month").innerText = "february";
            break;
        case 3:
            document.getElementById("month").innerText = "march";
            break;
        case 4:
            document.getElementById("month").innerText = "april";
            break;
        case 5:
            document.getElementById("month").innerText = "may";
            break;
        case 6:
            document.getElementById("month").innerText = "june";
            break;
        case 7:
            document.getElementById("month").innerText = "july";
            break;
        case 8:
            document.getElementById("month").innerText = "august";
            break;
        case 9:
            document.getElementById("month").innerText = "september";
            break;
        case 10:
            document.getElementById("month").innerText = "october";
            break;
        case 11:
            document.getElementById("month").innerText = "november";
            break;
        case 12:
            document.getElementById("month").innerText = "december";
            break;
        

} */

/* function updateClock(){
    const now = new Date();
    let hour = now.getHours().toString().padStart(2,0);
    const meridian = hour>=12? "PM":"AM";
    hour = hour % 12 ||12;
    hour = hour.toString().padStart(2,0);
    const minute = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hour}:${minute}:${second} ${meridian}`;
    document.getElementById("clock-display").innerText = timeString;
}
updateClock();
setInterval(updateClock,1000); */




/* const display = document.getElementById("clock");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime =0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00:00';
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
  let second = Math.floor(elapsedTime/1000 % 60);
  let millisecond = Math.floor(elapsedTime%1000/10);
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  second = String(second).padStart(2, '0');
  millisecond = String(millisecond).padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${second}:${millisecond}`;
} */


/* function func(callback){
    setTimeout(() => {console.log('task1');
                        callback()},1000);
}


function hello(){
    console.log('task2');
    console.log('task3');
    console.log('task4');
}

func(hello); */

// try catch error

/* try{
console.log(x);
}
catch(error){
    console.log(error);
    // console.error(error);
}
finally{
    console.log('done error handled');
} */


/* try{
    let x = window.prompt("enter jisko divide krna");
    let y = window.prompt("enter jisse divide krna");
    result = x/y;
    if(y==0){
        window.prompt("can't divide by zero");
        throw new Error("can't divide by zero");
    }
    else if(x===NaN || y===NaN){
        throw new Error("Not a number");
    }
    else{
        // window.alert(`result is ${result}`);
        console.log(`x = ${x} , y = ${y}`);
        console.log(result);
    }
}
catch(error){
    console.log(error);
}

console.log("end achieve"); */


// ----------------------------------------------------------------------

/* document.getElementById
document.getElementsByTagName
document.getElementsByClassName
document.querySelector
document.querySelectorAll */

// dom

// console.dir(document);
// console.log(document);

/* let head = document.getElementById("heading");
head.style.color = "white";
head.style.textAlign = "center";
head.style.backgroundColor = "#002339";
document.title = "harsh bhaiii";
document.body.style.background = "#131415"; */

// const fruit = document.getElementsByClassName("fruits");

/* fruit[0].style.backgroundColor = "yellow";
fruit[1].style.backgroundColor = "#d72d2d";
fruit[2].style.backgroundColor = "#751fff";
fruit[3].style.backgroundColor = "#00abf0"; */

/* for(let frut of fruit){
    frut.style.backgroundColor = 'yellow';
} */

/*   */

// const h3Element = document.getElementsByTagName("h3");
// const liElement = document.getElementsByTagName("li");
/* h3Element[0].style.backgroundColor = 'yellow';
h3Element[1].style.backgroundColor = 'red'; */

/* for(let element of h3Element){
    element.style.backgroundColor = 'yellow';
}

for(let element of liElement){
    element.style.backgroundColor = 'orange';
} */

/* Array.from(h3Element).forEach(element =>{
    element.style.backgroundColor = 'yellow';
})

Array.from(liElement).forEach(element =>{
    element.style.backgroundColor = 'red';
}) */

/* const element = document.querySelector("h3");
element.style.backgroundColor = 'yellow'; */


/* const element = document.querySelectorAll("li");

    element.forEach(change =>{
    change.style.backgroundColor = 'blue';
    change.style.color = 'white';
}) */

// -----------------------------------------------------------

/* .firstElementChild
.lastElementChild
.nextElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children */




/* const element = document.getElementById("apple");
const first = element.firstElementChild;
const last = element.lastElementChild;
first.style.backgroundColor = 'red';
last.style.backgroundColor = '#751fff';
 */

/* const element = document.querySelectorAll("ul");
element.forEach(elem =>{
    elem.firstElementChild.style.backgroundColor = 'red';
    elem.lastElementChild.style.backgroundColor = 'blue';
}) */

/* let element = document.getElementById("fruit");
let elem = element.nextElementSibling;
elem.style.backgroundColor = 'yellow'; */


/* let element = document.getElementById("dessert");
let elem = element.previousElementSibling;
elem.style.backgroundColor = '#751fff'; */


/* let element = document.getElementById("apple");
let patent = element.parentElement;
patent.style.backgroundColor = '#751fff'; */

/* let element = document.getElementById("fruit");
let children = element.children;

let element1 = document.getElementById("dessert");
let children1 = element1.children;

children1[1].style.backgroundColor = 'red';

Array.from(children).forEach(element =>{
    element.style.backgroundColor = 'yellow';
}) */



// html element creation

/* let h1Element = document.createElement("h1");
h1Element.textContent = "Hello World";
h1Element.id = "myh1";
h1Element.style.backgroundColor = "#751fff";
h1Element.style.color = "#FFF"
h1Element.style.textAlign = "center"; */

// document.getElementById("box1").append(h1Element);
// document.getElementById("box2").append(h1Element);
// document.getElementById("box2").prepend(h1Element);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(h1Element, box2)

// document.body.prepend(h1Element);
// document.body.append(h1Element);
// document.body.removeChild(h1Element);
// document.getElementById("box2").removeChild(h1Element);



/* let newList = document.createElement("li");
newList.textContent = "coconut";
newList.id = "coconut";
newList.style.backgroundColor = "red";
newList.style.color = "#002339";
// document.body.append(newList);
// document.getElementById("fruit").append(newList);
// document.getElementById("fruit").prepend(newList);
document.getElementById("fruit").insertBefore(newList , mango); */

// --------------------------------------

// eventlistner   .addEventListener(event, function)

/* et object = document.getElementById("mybox");

object.addEventListener("click",function callback(event) {
    event.target.style.backgroundColor = "#d72d2d";
    event.target.style.color = "white";
    event.target.textContent = "thanks for clicking";
});

object.addEventListener("mouseover",event =>{
    event.target.style.backgroundColor = "yellowgreen";
    event.target.textContent = "ops error!";
    event.target.style.color = "black";
})


object.addEventListener("mouseout",event =>{
    event.target.style.backgroundColor = "#1c22d5";
    event.target.textContent = "click here";
    event.target.style.color = "white";
})

let button = document.getElementById("clickme");

button.addEventListener("click",event =>{
    event.target.style.backgroundColor = '#131415';
})

button.addEventListener("mouseover",event =>{
    event.target.style.backgroundColor = 'gray';
})

button.addEventListener("mouseout",event =>{
    event.target.style.backgroundColor = '#d72d2d';
}) */


// keyevents : keydown , keyup , keypress

/* let text = document.getElementById("clickcontent");

document.addEventListener("keydown",event =>{
    text.textContent = '🥳';
    text.style.backgroundColor = 'yellowgreen'
})

document.addEventListener("keyup",event =>{
    text.style.backgroundColor = 'rgb(55, 143, 220)'
    text.textContent = '😒';
}) */

let input = document.getElementById("input-text");
// let list = document.createElement("li");
let add = document.getElementById("list");
let button = document.getElementById("addtask");

button.addEventListener("click",() =>{
    if(input.value ===''){
        alert('Please enter a task');
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = input.value;
        add.appendChild(list);
    }
    input.value = '';
    
})








