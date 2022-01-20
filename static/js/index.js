const handlers = require('./handlers');

function init() {
    const greetingForm = document.querySelector('#');
    greetingForm.addEventListener("submit", e => {
        console.log("Leprecorn event")
        e.preventDefault();
        const first_name = e.target.fname;
        const last_name = e.target.lname;
        const event = e.target.event;
        const message = e.target.message;
        handlers.createGreeting(fname, lname, event, message);
    })
}
