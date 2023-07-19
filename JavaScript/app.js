/*
console.log("HELLO FROM MY FIRST JS FILE!!");
let total = 1 + 5;
console.log(total);
console.log("GOODBYE!");

if (1 + 1 === 2) {
    console.log("MATH STILL WORKS!");
}
if (1 + 1 === 3) {
    console.log("MATH STILL WORKS!");
}


let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
    console.log("YOUR NUMBER IS:", random);
}
if (random >= 0.5) {
    console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
    console.log("YOUR NUMBER IS:", random);
}


let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
}
else {
    console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
}
console.log("YOUR NUMBER IS:", random);


let userInput = prompt("PLEASE ENTER YOUR NUMBER TO TELL YOU WHETHER EVEN OR ODD:");
if (userInput % 2 === 0) {
    console.log("THE INPUTTED NUMBER IS EVEN.");
} else if (userInput % 2 == 1) {
    console.log("THE INPUTTED NUMBER IS ODD.");
} else {
    console.log("INVALID INPUT.");
}



const password = prompt("please enter a new password:");

if (password.length >= 6) {
    if (password.indexOf('') === -1) {
        console.log("Valid password!")
    } else {
        console.log("Passord cannot contain spaces!")
    }
} else {
    console.log("Password too short! Must be 6+ characters.")
}
*/
/*
0-5 free
5-10 10$
10-65 20$
65+ free 
*/
const age = prompt("Pleaseenter your age:");

if (age > 0 && age < 5 || age >= 65) {
    console.log("FREE!");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("INVALID AGE!");
}
