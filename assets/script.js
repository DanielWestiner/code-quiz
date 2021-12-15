// Setting Up the Trivia Questios

let triviaQuestions = [
  {
    question: "What is the scientific name of a wolf?",
    options: ["Canis Lupus", "Canis Dufus", "Dogus Wolfus", "Catus Dogman"],
    correctGuess: 0,
  },
  {
    question: "What is the fasted land animal in the world?",
    options: ["Penguin", "Sloth", "Aligator", "Cheetah"],
    correctGuess: 3,
  },
  {
    question: "How many hearts does an octopus have?",
    options: ["437", "23", "3", "7"],
    correctGuess: 2,
  },
  {
    question: "What is a female donkey called?",
    options: ["A Harry", "A Belinda", "A Benny", "A Jenny"],
    correctGuess: 3,
  },
  {
    question: "How many eyes does a bee have?",
    options: ["1", "5", "59", "6043"],
    correctGuess: 1,
  },
];
// Make sure to credit opinionstage.com/blog/trivia-questions for the content of the trivia

//Assigning and setting up the countdown feature
let countDown = null;
let time = 60;

// Countdown Function

let timer = function () {
  time--;
  if (time <= 0) {
    gameOver();
  }
  let clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = time;
  }
};

// Function to Begin the Game
let questIndex = null;
let userScore = 0;

function beginGame() {
  document.getElementById("start").style.display = "none";
  document.getElementById("todo").style.display = "none";
  //
  document.getElementById("records").style.display = "none";
  //
  questIndex = 0;
  nextQuestion();
  document.getElementById("options").style.display = "block";
  document.getElementById("answers").style.display = "block";
  countDown = setInterval(timer, 1000);
}

// Function to provide feedback on questions and adjust scoring

function answerResponse(event) {
  let userAnswer = event.target.id;
  let guessIndex = parseInt(userAnswer.substring(6)) - 1;
  let correctGuessIndex = triviaQuestions[questIndex].correctGuess;
  if (guessIndex === correctGuessIndex) {
    document.getElementById("response").textContent = "That's Correct!";
    userScore = userScore + 1;
  } else {
    document.getElementById("response").textContent = "Sorry, Wrong Answer!";
    time = time - 10;
  }
  questIndex++;
  if (questIndex >= triviaQuestions.length) {
    gameOver();
  } else {
    nextQuestion();
  }
}

// Function to move onto next Questions
function nextQuestion() {
  let currentQuestion = triviaQuestions[questIndex];
  document.getElementById("options").textContent = currentQuestion.question;
  document.getElementById("answer1").textContent = currentQuestion.options[0];
  document.getElementById("answer2").textContent = currentQuestion.options[1];
  document.getElementById("answer3").textContent = currentQuestion.options[2];
  document.getElementById("answer4").textContent = currentQuestion.options[3];
}

// Ending the Game - Function to hide game elements and display Enter Score
function gameOver() {
  if (countDown) {
    clearInterval(countDown);
  }
  document.getElementById("options").style.display = "none";
  document.getElementById("answers").style.display = "none";
  document.getElementById("response").style.display = "none";
  document.getElementById("clock").style.display = "none";
  document.getElementById("records").style.display = "block";

  alert(
    "Game Over, please enter your initials on the next screen to see and record your score!"
  );
}

// Players can enter initials to submit score and store to local storage
function enterScore() {
  let initials = document.getElementById("initials").value;
  let scores = [];
  scores.push({
    initials: initials,
    score: userScore,
  });
  localStorage.setItem("scores", JSON.stringify(scores));
  showHighScores(scores);
}

// Displays a list of all entered High Scores

function showHighScores(scoreStore) {
  let enterUser = document.createElement("div");
  enterUser.textContent = "User Scores";
  let userList = document.createElement("ol");
  for (let i = 0; i < scoreStore.length; i++) {
    let currentScore = scoreStore[i];
    let listEl = document.createElement("li");
    listEl.textContent = `${currentScore.initials} ........ ${currentScore.score}`;
    userList.appendChild(listEl);
  }

  document.getElementById("scores").textContent = "";
  document.getElementById("scores").appendChild(enterUser);
  document.getElementById("scores").appendChild(userList);
  document.getElementById("clock").style.display = "none";
}

document.getElementById("start").addEventListener("click", beginGame);

let answerButton = document.querySelectorAll(".answer-button");

for (let i = 0; i < answerButton.length; i++) {
  answerButton[i].addEventListener("click", answerResponse);
}

document.getElementById("enter-initials").addEventListener("click", enterScore);

// Could update to JQuery now
