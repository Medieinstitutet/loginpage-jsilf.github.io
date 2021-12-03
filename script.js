console.log("hello world");

let header = document.getElementById("header");
let nav = document.getElementById("menu");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let loginWrap = document.getElementById("loginWrap");
let content = document.getElementById("content");

/*om ingenting visa välkomstsida
Header icke inloggad startsida 
Content icke inloggad startsida 

Content icke inloggad
Content inloggad
Content fel inloggning 

om setItem janne + test så visa inloggad sida
Header inloggad välkommen
Content inloggad välkommen*/

let startPage = () => {
    h1.innerText = "Företagslogo";
    h2.innerText = "Logga in här";

    let username = document.createElement("input");
    username.id = "username";
    loginWrap.append(username);

    let password = document.createElement("input");
    password.id = "password";
    loginWrap.append(password);

    let loginBtn = document.createElement("button");
    loginBtn.id = "loginBtn";
    loginBtn.innerText = "Logga in";
    loginWrap.append(loginBtn);
};
//anropa funktionen startsida
startPage();

//users
let objUsers = [
    {
        username: "janne",
        password: "test"
    },
    {
        username: "karin",
        password: "test"
    }
];

function signUp() {

    let userLS = localStorage.getItem("list");

    if (userLS) {
        userLS = JSON.parse(userLS);
    }

    localStorage.setItem("list", JSON.stringify(objUsers));
}
signUp();

function logIn() {

    let user = localStorage.getItem("username");
    if (user) {
        user = JSON.parse(user);
    }
}

function menu() {

    let menuList = ["sida1", "sida2", "sida3"];

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
//när du är inloggad ser det ut såhär
let loggedIn = () => {


    logIn();
    menu();
    logOut();

    let h3 = document.createElement("h3");
    h3.id = "h3";
    h3.innerText = "Välkommen!";
    content.append(h3);

    let p = document.createElement("p");
    p.id = "p";
    p.innerText = "Lorem ipsum dolor";
    content.append(p);
};
//du är inloggad men ska logga ut
let logOut = () => {

    loginWrap.innerHTML = "";

    let logoutBtn = document.createElement("button");
    logoutBtn.id = "logoutBtn";
    logoutBtn.innerText = "Logga ut";
    loginWrap.append(logoutBtn);

    logoutBtn.addEventListener("click", () => {
        loginWrap.innerHTML = "";
        location.reload();
        startPage();
    });
};

//när du klickar på knappen blir du antingen inloggad eller får felmeddelande
loginBtn.addEventListener("click", () => {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < objUsers.length; i++) {
        if (username == objUsers[i].username && password == objUsers[i].password) {
            // console.log(username + " är inloggad");
            loggedIn();
            return;
        } else {
            content.innerText = "Fel vid inloggning!";
            return;
        }
    }
});


