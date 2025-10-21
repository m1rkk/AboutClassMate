document.getElementById("darkModeBtn").addEventListener("click", ev =>  {
    document.getElementById("body").classList.toggle("dark");
});
document.getElementById("lightModeBtn").addEventListener("click", ev =>  {
    document.getElementById("body").classList.toggle("dark");
});
cardsContainer = document.getElementById("cards")
imgs = ["src/imgs/Vector%20(1).png","src/imgs/Vector%20(2).png","src/imgs/Vector%20(5).png","src/imgs/Vector%20(7).png"]
dbLi = ["Student","Teacher","Appointments","Chats", "Messages"]
backendLi = ["Spring Security + JWT ",
    " Spring Data JPA ",
    " Spring WebSocket / STOMP ",
    " Spring Boot Web ",
    " OAuth2 Client "]
frontendLi = [
    "UI skolēniem un skolotājiem.",
    "Reāllaika čats ar STOMP.js + Sock.js .",
    "Nodarbību rezervācija, kalendāra sinhronizācija."
]
stackLi = [
    " Google Calendar API  ",
    " Google API Client for Java ",
    " Twilio / Vonage / Infobip",
]
liArrays = [dbLi,backendLi,frontendLi,stackLi];
for (i = 0; i < 4; i++) {
    cardElem = document.createElement("div");
    cardElem.classList.add("card");
    cardElemUpper = document.createElement("div");
    cardElemUpper.classList.add("upperCard");
    cardElemUpperImg = document.createElement("img");
    cardElemUpperImg.src = imgs[i];
    cardElemUpperImg.classList.add("cardImg");
    cardElemUpper.appendChild(cardElemUpperImg)
    cardElem.appendChild(cardElemUpper);
    hiddenText = document.createElement("div");
    hiddenText.classList.add("hiddenText");
    hiddenTextUl = document.createElement("ul");
    hiddenText.appendChild(hiddenTextUl);
    for (j = 0; j < liArrays[i].length; j++) {
        hiddenTextUlLi = document.createElement("li");
        hiddenTextUlLi.textContent = liArrays[i][j];
        hiddenTextUl.appendChild(hiddenTextUlLi);
    }
    cardElem.appendChild(hiddenText);
    cardsContainer.appendChild(cardElem);
    moreBtn = document.createElement("button");
    moreBtn.textContent = "More";
    cardElem.appendChild(moreBtn);
}