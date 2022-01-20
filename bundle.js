(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function createGreeting(first_name, last_name, event, message) {
    console.log("Greet the unicorns")
    let greeting = document.querySelector("#greeting-title");
    let outputMessage = document.querySelector("#greeting-message");
    let outputEvent = document.querySelector("#greeting-card");

    greeting.innerHTML = "Unicorns";
    outputMessage.innerHTML = "Hello unicorns";
    outputEvent.background = "red";
}

module.exports = {
    createGreeting
}

},{}],2:[function(require,module,exports){
const handlers = require('./handlers');

const greetingForm = document.querySelector('#greeting-form');
greetingForm.addEventListener("submit", e => {
    e.preventDefault();
    const first_name = e.target.fname;
    const last_name = e.target.lname;
    const event = e.target.event;
    const message = e.target.message;
    handlers.createGreeting(fname, lname, event, message);
})

},{"./handlers":1}]},{},[2]);
