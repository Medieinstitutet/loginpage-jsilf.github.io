console.log("hello world");

let header = document.getElementById("header");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let inputName = document.getElementById("inputName");
let inputPsw = document.getElementById("inputPsw");
let loginBtn = document.getElementById("loginBtn");
let content = document.getElementById("content");

//om ingenting visa välkomstsida
/* Header icke inloggad startsida */
/* Content icke inloggad startsida */

//klicka på knappen för att försöka logga in

//om fel input så visa felinloggning
/* Content fel inloggning */

//om janne + test så visa inloggad sida
/* Header inloggad välkommen */
/* Content inloggad välkommen*/

//localStorage.setItem("userName","janne")
//localStorage.setItem("userPsw","test")

const startPage = () => {
    h1.innerText = "Företagslogo";
    h2.innerText = "Logga in här";
};
startPage();

const loggedIn = () => {

    let h3 = document.createElement("h3");
    h3.id = "h3";
    h3.innerText = "Titel";
    content.append(h3);

    let p = document.createElement("p");
    p.id = "p";
    p.innerText = "Lorem ipsum dolor";
    content.append(p);

    let logoutBtn = document.createElement("button");
    logoutBtn.id = "logoutBtn";
    logoutBtn.innerText = "Logga ut";
    header.append(logoutBtn);

    logoutBtn.addEventListener("click", (evt) => {
        evt.preventDefault();

        startPage();
    });

};

const logOut = () => {

};

loginBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    // har vi klickat på knappen och det är fel inlogg så
    if (inputName && inputPsw) {
        // headerText.innerText = "Fel vid inloggning!";
        loggedIn();
    } else {
        // loggedIn();
        console.log("inloggad");
    }
});


