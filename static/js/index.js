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
