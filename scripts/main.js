//Lets you click on the Firefox logo and it switches to another
let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

//Adding a Change User Button and field that lets the user input various names that will pop up in the header
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is awesome, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla is awesome, " + storedName;
}

myButton.onclick = function() {
  setUserName();
};

//MORE JAVASCRIPT BASICS -- commented out so above works

// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

//JavaScript Basics Practice
/*
let myVariable = 'Bob';
myVariable = 'Steve';

let myVariable = document.querySelector('h1');
alert('hello!');

function multiple(num1, num2) {
    let result = num1 * num ;
    return result; 
    
}

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

*/
