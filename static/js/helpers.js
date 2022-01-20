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
