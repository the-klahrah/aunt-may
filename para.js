"use strict";

function setBgColor() {
    document.body.style.backgroundColor = "green"
}

function resetBgColor() {
    document.body.style.backgroundColor = ""
}

setTimeout(setBgColor, 1000)
setTimeout(resetBgColor, 2000)


// walking the DOM 
// children, nextElementSibling, previousElementSibling

// searching the DOM
// querySelector, querySelectorAll, getElementById, getElementsByClassName, getElementsByTagName

// getElementById - returns one element with the specified Id
let aboutsection = document.getElementById("aboutus");
aboutsection.style.backgroundColor = "black";

// querySelector - returns the first element that matches the specified querySelector
let aboutSectionTwo = document.querySelector("#aboutus-two");
// aboutSectionTwo.style.backgroundColor = "blue";

let aboutSectionTwoDiv = document.querySelector("#aboutus-two div");
// aboutSectionTwoDiv.style.backgroundColor = "green";

// querySelectorAll - returns all elements that matches the specified querySelector
let faIcons = document.querySelectorAll(".fa-solid");
// console.log(faIcons[1]); returns the second element in the array

let bars = document.querySelector(".bars");
console.log(bars);


// get required elements
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");
let buttonElement = document.querySelector("form button");


// Add event listener to button
buttonElement.addEventListener("click", function (event) {
    //     console.log(event);
    // prevent default "submit"(reload) event behaviour 
    event.preventDefault();


    // variable to hold error element <p class="error-msg">
    let errorElement;

    // check if any input field is empty
    if (nameInput.value.trim() === "") {
        // if empty, show error message
        errorElement = nameInput.nextElementSibling;
        errorElement.textContent = "please enter a valid name";
    } else if (nameInput.value.trim().length < 3) {
        // if name is less than 3 characters, show error message
        errorElement = nameInput.nextElementSibling;
        errorElement.textContent = "Name must be at least 3 characters long";
    }
    if (emailInput.value.trim() === "") {
        errorElement = emailInput.nextElementSibling;
        errorElement.textContent = "please enter a valid email";
    }
    if (messageInput.value.trim() === "") {
        errorElement = messageInput.nextElementSibling;
        errorElement.textContent = "please enter a valid message";

    }
});   


