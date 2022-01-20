const helpers = require('./helpers');

function createGreeting(first_name, last_name, event, message) {
    let greeting = document.querySelector("#greeting-title");
    let outputMessage = document.querySelector("#greeting-message");
    let outputEvent = document.querySelector("#greeting-card");

    greeting.innerHTML = `${first_name.value} ${last_name.value}`;
    outputMessage.innerHTML = message.value;
<<<<<<< HEAD
    outputEvent.style.backgroundImage = "https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs185_177502406-low.jpg?itok=ubWa1SJj";
=======
    helpers.showBackground(event);
>>>>>>> f2b785c784d4e6824ea95e88b431e44fc1617d83
}

module.exports = {
    createGreeting
}
