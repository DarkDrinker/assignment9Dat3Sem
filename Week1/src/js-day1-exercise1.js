//1.1.1 create a new file called js-day1-exercise1.js and following line:
let names = ["Lars", "Peter", "Jan", "Bo"];
/*1.1.2 Create a function called myFilter that takes 2 parameters, an array and a callback function. The myFilter function should return a new array based on the result of the callback function.
The callback function should take 1 parameter (an element in the array) and return a boolean indicating whether to include the element in the resulting array.
Test the function with the same array and callback as in the example with the original filter method.*/
let filteredNames = myFilter(names, function(name) {
    return name.length <= 3;
});

console.log(filteredNames);

function myFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}



/*1.1.3 Create a function called myMap that takes 2 parameters, an array and a callback function. The myMap function should return a new array based on the result of the callback function.

The callback function should take 1 parameter (an element in the array) and return the modified element.

Test the function with the same array and callback as in the example with the original map method.*/

let mappedNames = myMap(names, function(name) {
    return name.toUpperCase();
});

console.log(mappedNames);

function myMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

/* 1.2 : Create a new version of the two functions (without the array argument) which you should add to the Array prototype property so they can be called on any array as sketched below: */
//    let names = ["Lars", "Peter", "Jan", "Bo"];
//    let newArray = names.myFilter(function(name) {…});

Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;
};

let mappedNames2 = names.myMap(function(name) {
    return name.toUpperCase();
});

console.log(mappedNames2);

/* 1.3 Simple DOM Manipulation and Event Handling
1.3.1 Add three divs to an HTML page, each with a unique id. When the page initially is loaded, all divs should be given a color of your choice. */
window.addEventListener('DOMContentLoaded', function() {
    let divs = document.querySelectorAll('div');
    divs.forEach(function(div) {
        div.style.backgroundColor = 'blue';
    });
});

/* 1.3.2 Add a button, and assign a click handler to the button. When the button is clicked, each div should be given a unique color. */
let button = document.querySelector('button');
button.addEventListener('click', function() {
    let divs = document.querySelectorAll('div');
    let colors = ['red', 'green', 'yellow'];
    divs.forEach(function(div, index) {
        div.style.backgroundColor = colors[index % colors.length];
    });
});
