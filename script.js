console.log("hello world");

let header = document.getElementById("header");
let nav = document.getElementById("menu");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let loginWrap = document.getElementById("loginWrap");
let content = document.getElementById("content");

//startsidan innan inloggning
let startPage = () => {

    h1.textContent = "Företagslogo";
    h2.textContent = "Logga in här";

    let username = document.createElement("input");
    username.id = "username";
    loginWrap.append(username);

    let password = document.createElement("input");
    password.id = "password";
    loginWrap.append(password);

    let buttonWrap = document.createElement("div");
    loginWrap.append(buttonWrap);

    let loginBtn = document.createElement("button");
    loginBtn.id = "loginBtn";
    loginBtn.textContent = "Logga in";
    buttonWrap.append(loginBtn);

    // let createLBtn = document.createElement("button");
    // createLBtn.id = "createLBtn";
    // createLBtn.textContent = "Skapa användare";
    // buttonWrap.append(createLBtn);
};

//anropa funktionen startsida
startPage();

//array att spara användare i
let objUsers = [
    {
        username: "janne",
        password: "test"
    }
];

//hämta och spara users
function signUp() {

    let userLS = localStorage.getItem("users");

    if (userLS) {
        userLS = JSON.parse(userLS);
    } else {
        userLS = [];
    }

    localStorage.setItem("users", JSON.stringify(objUsers));
}

//inloggad sida
function loggedInPage() {

    let menuList = ["sida1", "sida2", "sida3"];
    let ul = document.createElement("ul");

    for (let i = 0; i < menuList.length; i++) {
        let li = document.createElement("li");
        li.id = i;
        li.innerHTML = menuList[i];
        ul.append(li);
    }
    nav.append(ul);
}

//knapp för inloggning
loginBtn.addEventListener("click", () => {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < objUsers.length; i++) {

        if (username == objUsers[i].username && password == objUsers[i].password) {

            loggedInPage();
            signUp();
            logOut();

            let h3 = document.createElement("h3");
            h3.innerText = `Välkommen ${username}!`;
            content.append(h3);

            let p = document.createElement("p");
            p.innerText = "Lorem ipsum dolor";
            content.append(p);
            return;
        } else {
            content.innerText = "Fel vid inloggning!";
            return;
        }
    }
});

//logga ut
let logOut = () => {

    loginWrap.innerHTML = "";

    let logoutBtn = document.createElement("button");
    logoutBtn.id = "logoutBtn";
    logoutBtn.innerText = "Logga ut";
    loginWrap.append(logoutBtn);

    logoutBtn.addEventListener("click", () => {

        startPage();

        localStorage.removeItem("username");
        localStorage.removeItem("password");
    });
};

