(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const helpers = require('./helpers');

function createGreeting(first_name, last_name, event, message) {
    let greeting = document.querySelector("#greeting-title");
    let outputMessage = document.querySelector("#greeting-message");
    let outputEvent = document.querySelector("#greeting-card");

    greeting.innerHTML = `${first_name.value} ${last_name.value}`;
    outputMessage.innerHTML = message.value;
    helpers.showBackground(event);
}

module.exports = {
    createGreeting
}

},{"./helpers":2}],2:[function(require,module,exports){
function showBackground(event){
    const card = document.querySelector("#greeting-card");

    if (event=="Birthday"){
        card.style.backgroundImage = "url(../img/Birthday.jpg)";
        card.querySelector("#greeting-title").textContent = "Happy Birthday!"
    } 
    if (event=="New Year"){
        card.style.backgroundImage = "url(../img/new-year.jpg)";
        card.querySelector("#greeting-title").textContent = "Happy New Year!"
    }
    if (event=="Christmas"){
        card.style.backgroundImage = "url(../img/Christmas.jpg)";
        card.querySelector("#greeting-title").textContent = "Merry Christmas!"
    }

}

module.exports = {
    showBackground
}

},{}],3:[function(require,module,exports){
const handlers = require('./handlers');

function init() {
    const greetingForm = document.querySelector('form');

    greetingForm.addEventListener("submit", e => {
        console.log("Leprecorn event")
        e.preventDefault();
        const first_name = e.target.fname;
        const last_name = e.target.lname;
        const event = e.target.event.value;
        const message = e.target.message;
        handlers.createGreeting(fname, lname, event, message);
    });
}

init();

},{"./handlers":1}]},{},[3]);
