const handlers = require('./handlers');

function showBackground(event){
    if (event=="Birthday"){
        document.body.style.backgroundImage = "url(../img/Birthday.jpg)";
        document.querySelector("#greeting-title").textContent = "Happy Birthday!"
    } 
    if (event=="New Year"){
        document.body.style.backgroundImage = "url(../img/new-year.jpg)";
        document.querySelector("#greeting-title").textContent = "Happy New Year!"
    }
    if (event=="Christmas"){
        document.body.style.backgroundImage = "url(../img/Christmas.jpg)";
        document.querySelector("#greeting-title").textContent = "Merry Christmas!"
    }

}


function init() {
    const greetingForm = document.querySelector('form');
    greetingForm.addEventListener("submit", e => {
        console.log("Leprecorn event")
        e.preventDefault();
        const first_name = e.target.fname;
        const last_name = e.target.lname;
        const event = e.target.event.value;
        const message = e.target.message;
        //handlers.createGreeting(fname, lname, event, message);
        showBackground(event);
    })
}
