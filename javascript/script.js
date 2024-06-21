const emailInput = document.querySelector(".container input");
const submitButton = document.querySelector(".container button");
const usernameBox = document.querySelector(".username-box")
const username = document.querySelector(".username-box p");
const userIcon = document.querySelector(".username-box img");

const clickHandler = () => {
  const email = emailInput.value;
  const user = email.split("@");
  const finalUsername = user[0];
  usernameBox.className = "box"
  username.innerText = finalUsername
  userIcon.className = "username-img"
  userIcon.src = "./assets/icons/user-icon.png"
  emailInput.value = ""
};

submitButton.addEventListener("click", clickHandler);