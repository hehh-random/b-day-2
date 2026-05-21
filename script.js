const passwordBox = document.getElementById("passwordBox");
const message = document.getElementById("message");

const correctPassword = "143";

let wrongAttempts = 0;

/* MUSIC */
window.addEventListener("click", () => {
  document.getElementById("bgMusic").play();
}, { once:true });

function addNumber(number){

  if(passwordBox.value.length < 6){
    passwordBox.value += number;
  }
}

function clearBox(){
  passwordBox.value = "";
}

function deleteOne(){
  passwordBox.value =
    passwordBox.value.slice(0,-1);
}

function checkPassword(){

  if(passwordBox.value === correctPassword){

    message.innerText = "ACCESS GRANTED ❤️";

    setTimeout(() => {

      document
        .getElementById("screen1")
        .classList.add("hidden");

      document
        .getElementById("questionScreen")
        .classList.remove("hidden");

    },1500);

  } else {

    wrongAttempts++;

    const funnyMessages = [
      "WRONG. Do you even know me? 😭",
      "Try harder boyfriend 💀",
      "Embarrassing 😭",
      "Nopeeeee ❤️"
    ];

    const random =
      Math.floor(Math.random()*funnyMessages.length);

    message.innerText = funnyMessages[random];

    passwordBox.value = "";

    if(wrongAttempts >= 3){

      document
        .getElementById("screen1")
        .classList.add("hidden");

      document
        .getElementById("hackerScreen")
        .classList.remove("hidden");

      setTimeout(() => {

        document
          .getElementById("hackerScreen")
          .classList.add("hidden");

        document
          .getElementById("screen1")
          .classList.remove("hidden");

        wrongAttempts = 0;

      },3000);
    }
  }
}

/* DIFFERENT LETTERS */

function openLetter(choice){

  document
    .getElementById("questionScreen")
    .classList.add("hidden");

  document
    .getElementById("loveScreen")
    .classList.remove("hidden");

  const loveImage =
    document.getElementById("loveImage");

  const loveText =
    document.getElementById("loveText");

  if(choice === 1){

    loveImage.src = "pic1.jpg";

    loveText.innerHTML =
      "You are literally the cutest person ever 😭❤️<br><br>I still smile at every little thing you do ✨";

  }

  else if(choice === 2){

    loveImage.src = "pic2.jpg";

    loveText.innerHTML =
      "Still you. Always you 😌❤️<br><br>No matter what happens, you're still my favorite person.";

  }

  else{

    loveImage.src = "pic3.jpg";

    loveText.innerHTML =
      "Obviously you 🙄❤️<br><br>Like be serious... nobody can compete with you 😭✨";

  }
}

/* BACK */

function goBack(){

  document
    .getElementById("loveScreen")
    .classList.add("hidden");

  document
    .getElementById("questionScreen")
    .classList.remove("hidden");
}

/* FINAL */

function finalMessage(){

  document
    .getElementById("loveScreen")
    .classList.add("hidden");

  document
    .getElementById("finalScreen")
    .classList.remove("hidden");
}