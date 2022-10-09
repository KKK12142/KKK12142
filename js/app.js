const loginForm = document.querySelector(".login-form");
const loginId = document.getElementById("ID");
const loginPw = document.getElementById("PW");
const main = document.querySelector("main");
const canvas = document.querySelector("canvas");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

console.log("app.js loaded");
canvas.classList.add("hidden");


function onLoginSubmit(event){
      event.preventDefault();
      const user_name = loginId.value;
      localStorage.setItem("user_name", user_name);
      main.classList.add("hidden");
      h1.innerText = `어서오세요 ${user_name}님`;
      h2.innerText = `그림을 감상할수도 그려볼수도 있습니다.`;
}

const savedUsername = localStorage.getItem("user_name");
if(savedUsername === null){
      loginForm.addEventListener("submit", onLoginSubmit);
      console.log("login");
      main.classList.remove("hidden");

} else {
      canvas.classList.remove("hidden");
      main.classList.add("hidden");
      console.log("login");
      h1.innerText = `어서오세요 ${savedUsername}님`;
      h2.innerText = `그림을 감상할수도 그려볼수도 있습니다.`;
}