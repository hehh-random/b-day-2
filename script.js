const passwordBox = document.getElementById("passwordBox");
const message = document.getElementById("message");

const correctPassword = "143";

let wrongAttempts = 0;

function addNumber(number) {
  if (passwordBox.value.length < 6) {
    passwordBox.value += number;
  }
}

function clearBox() {
  passwordBox.value = "";
}

function deleteOne() {
  passwordBox.value = passwordBox.value.slice(0, -1);
}

function checkPassword() {

  if (passwordBox.value === correctPassword) {

    message.innerText = "Hmm... not correct 🤨";

    setTimeout(() => {
      message.innerText = "JUST KIDDINGGG ❤️";
    }, 1200);

    setTimeout(() => {

      document.getElementById("screen1").classList.add("hidden");

      document.getElementById("questionScreen").classList.remove("hidden");

    }, 2500);

  } else {

    wrongAttempts++;

    const funnyMessages = [
      "WRONG. Do you even know me? 😭",
      "Try harder boyfriend 💀",
      "Embarrassing 😭",
      "Nopeeeee ❤️"
    ];

    const randomMessage = Math.floor(Math.random() * funnyMessages.length);

    message.innerText = funnyMessages[randomMessage];

    passwordBox.value = "";

    if (wrongAttempts >= 3) {

      document.getElementById("screen1").classList.add("hidden");

      document.getElementById("hackerScreen").classList.remove("hidden");

      setTimeout(() => {

        document.getElementById("hackerScreen").classList.add("hidden");

        document.getElementById("screen1").classList.remove("hidden");

        wrongAttempts = 0;

      }, 3500);
    }
  }
}

function showLoveLetter() {

  document.getElementById("questionScreen").classList.add("hidden");

  document.getElementById("loveScreen").classList.remove("hidden");
}

function finalMessage() {

  document.getElementById("loveScreen").classList.add("hidden");

  document.getElementById("finalScreen").classList.remove("hidden");
}



const passwordBox = document.getElementById("passwordBox");
const message = document.getElementById("message");

const correctPassword = "143";

let wrongAttempts = 0;

function addNumber(number) {
  if (passwordBox.value.length < 6) {
    passwordBox.value += number;
  }
}

function clearBox() {
  passwordBox.value = "";
}

function deleteOne() {
  passwordBox.value = passwordBox.value.slice(0, -1);
}

function checkPassword() {

  if (passwordBox.value === correctPassword) {

    message.innerText = "Hmm... not correct 🤨";

    setTimeout(() => {

      message.innerText = "JUST KIDDINGGG ❤️";

    }, 1500);

    setTimeout(() => {

      document.getElementById("screen1").classList.add("hidden");

      document.getElementById("questionScreen").classList.remove("hidden");

    }, 3000);

  } else {

    wrongAttempts++;

    const funnyMessages = [
      "WRONG. Do you even know me? 😭",
      "Try harder boyfriend 💀",
      "Embarrassing 😭",
      "Nopeeeee ❤️"
    ];

    message.innerText = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

    passwordBox.value = "";

    if (wrongAttempts >= 3) {

      document.getElementById("screen1").classList.add("hidden");

      document.getElementById("hackerScreen").classList.remove("hidden");

      setTimeout(() => {

        document.getElementById("hackerScreen").classList.add("hidden");

        document.getElementById("screen1").classList.remove("hidden");

        wrongAttempts = 0;

      }, 3500);

    }

  }

}

function showLoveLetter() {

  document.getElementById("questionScreen").classList.add("hidden");

  document.getElementById("loveScreen").classL