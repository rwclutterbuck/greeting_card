function createGreeting(first_name, last_name, event, message) {
    let greeting = document.querySelector("#greeting-title");
    let outputMessage = document.querySelector("#greeting-message");
    let outputEvent = document.querySelector("#greeting-card");

    greeting.innerHTML = `${first_name.value} ${last_name.value}`;
    outputMessage.innerHTML = message.value;
    outputEvent.style.backgroundImage = "url('https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs185_177502406-low.jpg?itok=ubWa1SJj')";
}

module.exports = {
    createGreeting
}
