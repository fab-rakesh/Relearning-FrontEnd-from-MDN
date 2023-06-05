function displayName(userName) {
  document.querySelector("h1").textContent = "I'm cool, " + userName;
}

function storeName(userName) {
  localStorage.setItem("name", userName);
  return userName;
}

function askName() {
  let userName;
  do {
    userName = prompt("Pleae enter your name");
  } while (userName === null);

  return userName;
}

// display name
const userName = localStorage.getItem("name");
if (userName) displayName(userName);
else displayName(storeName(askName()));

// change name
document.querySelector("button").onclick = () => {
  const userName = prompt("Please enter your name");
  if (userName) displayName(userName);
};

// change image
const myImg = document.querySelector("img");
myImg.onclick = () => {
  if (myImg.getAttribute("src") === "images/apple.png") {
    myImg.style.width = "280px";
    myImg.setAttribute("src", "images/firefox.png");
  } else {
    myImg.style.width = "500px";
    myImg.setAttribute("src", "images/apple.png");
  }
};
