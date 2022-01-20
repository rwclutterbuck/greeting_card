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
