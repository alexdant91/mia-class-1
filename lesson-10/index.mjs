import {internalMemory} from "./utils.mjs";

const HIDE_CLASS_NAME = "hidden";

const $loginSection = document.querySelector("#login");
const $profileSection = document.querySelector("#profile");
const $loginForm = document.querySelector("#login-form");
const $logoutBtn = document.querySelector("#logout");
const $userData = document.querySelector("#user-data");

const state = {
    auth: {
        user: null,
        token: null
    }
}

const navigate = (to) => {
    if(to == "login") {
        $profileSection.classList.add(HIDE_CLASS_NAME);
        $loginSection.classList.remove(HIDE_CLASS_NAME);
    } else if(to == "profile") {
        $loginSection.classList.add(HIDE_CLASS_NAME);
        $profileSection.classList.remove(HIDE_CLASS_NAME);
    } else {
        return;
    }
}

const checkLoginStatus = () => {
    const auth = internalMemory.get("auth");
    if(auth == null) {
        navigate("login");
    } else {
        state.auth = auth;
        $userData.innerHTML = JSON.stringify(state.auth, null, 2);
        navigate("profile");
    }
}

const login = (user, token) => {
    state.auth.user = user;
    state.auth.token = token;
    internalMemory.save("auth", state.auth);
    checkLoginStatus();
}

const logout = () => {
    state.auth.user = null;
    state.auth.token = null;
    internalMemory.remove("auth");
    checkLoginStatus();
}

$loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    login({id: 1, name: "Ivan"}, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
});

$logoutBtn.addEventListener("click", () => {
    logout();
});

const init = () => {
    checkLoginStatus();
}

init();