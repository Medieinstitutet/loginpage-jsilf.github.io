console.log("hello world");

let header = document.getElementById("header");
let nav = document.getElementById("menu");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let loginWrap = document.getElementById("loginWrap");
let content = document.getElementById("content");

//om ingenting visa välkomstsida
/* Header icke inloggad startsida */
/* Content icke inloggad startsida */

//om fel input så visa felinloggning
/* Content fel inloggning */

//om setItem janne + test så visa inloggad sida
/* Header inloggad välkommen */
/* Content inloggad välkommen*/

/*
localStorage.setItem("userName","janne")
localStorage.setItem("userPsw","test")
localStorage.getItem("userName")
localStorage.getItem("userPsw")
*/

let startPage = () => {
    h1.innerText = "Företagslogo";
    h2.innerText = "Logga in här";

    let inputName = document.createElement("input");
    inputName.id = "inputName";
    loginWrap.append(inputName);

    let inputPsw = document.createElement("input");
    inputPsw.id = "inputPsw";
    loginWrap.append(inputPsw);

    let loginBtn = document.createElement("button");
    loginBtn.id = "loginBtn";
    loginBtn.innerText = "Logga in";
    loginWrap.append(loginBtn);
};
startPage();

let menuList = ["sida1", "sida2", "sida3"];

function menu() {
    let ul = document.createElement("ul");

    for (let i = 0; i < menuList.length; i++) {

        let li = document.createElement("li");
        li.id = i;
        li.innerHTML = menuList[i];
        ul.append(li);
        // // klicka på meny
        // li.addEventListener("click", (evt) => {
        //    
        // });
    }
    nav.append(ul);
}

let logOut = () => {
    let logoutBtn = document.createElement("button");
    logoutBtn.id = "logoutBtn";
    logoutBtn.innerText = "Logga ut";
    header.append(logoutBtn);

    logoutBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        // har vi klickat på knappen och det är fel inlogg så
        if (loggedIn()) {
            startPage();
            return;
        }
    });
};



let loggedIn = () => {

    menu();
    logOut();

    h2.innerText = "Välkommen!";

    let h3 = document.createElement("h3");
    h3.id = "h3";
    h3.innerText = "Titel";
    content.append(h3);

    let p = document.createElement("p");
    p.id = "p";
    p.innerText = "Lorem ipsum dolor";
    content.append(p);
};

loginBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    // har vi klickat på knappen och det är fel inlogg så
    if (saveName && savePsw == true) {
        //loggedIn();
        console.log("inloggad");

    } else {
        loggedIn();
        //h2.innerText = "Fel vid inloggning!";
    }
});

// let newUser = [
//     {
//         username: "janne",
//         password: "test"
//     },
//     {
//         username: "karin",
//         password: "test"
//     }
// ];

// let saveName = document.getElementById("inputName");
// inputName.innerText = username.value;

// let savePsw = document.getElementById("inputPsw");
// inputPsw.innerText = password.value;


// addtoLS(newUser);

// function addtoLS(user) {
//     console.log(user);
//     let userLS = localStorage.getItem("list");
//     let userArray = [saveName, savePsw];

//     if (userLS) {
//         userArray = JSON.parse(userLS);

//     }

//     userArray.push(user);
//     localStorage.setItem("list", JSON.stringify(userArray));
// }
