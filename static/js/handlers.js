function createGreeting(first_name, last_name, event, message) {
    console.log("Greet the unicorns")
    let greeting = document.querySelector("#greeting-title");
    let outputMessage = document.querySelector("#greeting-message");
    let outputEvent = document.querySelector("#greeting-card");

    greeting.innerHTML = "Unicorns";
    outputMessage.innerHTML = "Hello unicorns";
    outputEvent.background = "red";
}
