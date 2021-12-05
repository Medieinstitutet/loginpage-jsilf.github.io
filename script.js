//hämta id
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let p = document.getElementById("p");
let loginWrap = document.getElementById("loginWrap");
let logoutWrap = document.getElementById("logoutWrap");
let content = document.getElementById("content");

//startsidan innan inloggning
let startPage = () => {

    h1.textContent = "Företagslogo";
    h2.textContent = "Logga in här";

    p.textContent = "Företaget lorem ipsum dolor sit amet";

    let username = document.createElement("input");
    username.id = "username";
    loginWrap.append(username);

    let password = document.createElement("input");
    password.id = "password";
    loginWrap.append(password);

    let loginBtn = document.createElement("button");
    loginBtn.id = "loginBtn";
    loginBtn.textContent = "Logga in";
    loginWrap.append(loginBtn);

    // let createBtn = document.createElement("button");
    // createBtn.id = "createBtn";
    // createBtn.textContent = "Skapa användare";
    // loginWrap.append(createBtn);
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
function logInLS() {
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

    let username = document.getElementById("username").value;
    h3.textContent = `Välkommen ${username}!`;

    p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";

    logOut();
    logInLS();
    //check login window onload
    localStorage.setItem("loggedIn", 1);
}

//knapp logga in och visa content
loginBtn.addEventListener("click", () => {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    //kolla om inlogget stämmer för att logga in
    for (let i = 0; i < objUsers.length; i++) {
        if (username == objUsers[i].username && password == objUsers[i].password) {
            loggedInPage();
            return;
        } else {
            p.innerText = "Fel användarnamn eller lösenord, försök igen!";
            return;
        }
    }
});
//logga ut
let logOut = () => {
    loginWrap.style.display = "none";

    let logoutBtn = document.createElement("button");
    logoutBtn.id = "logoutBtn";
    logoutBtn.innerText = "Logga ut";
    logoutWrap.append(logoutBtn);
    //knapp logga ut
    logoutBtn.addEventListener("click", () => {

        logoutBtn.remove();
        content.style.display = "none";
        loginWrap.style.display = "block";
        location.reload();

        localStorage.clear();
    });
};
//checka så login stämmer och få sidan sidan att stanna vid reload
function checklogin() {
    if (localStorage.getItem("loggedIn") == 1) {
        loggedInPage();
    }
}
window.onload = checklogin();