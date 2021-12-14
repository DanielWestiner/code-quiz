// Setting Up the Trivia Questios

let triviaQuestions = [{
    question: 'What is the scientific name of a wolf?',
    options: ['Canis Lupus', 'Canis Dufus', 'Dogus Wolfus', 'Catus Dogman'],
    correctGuess: 0
    },
    {
    question: 'What is the fasted land animal in the world?',
    options: ['Penguin', 'Sloth', 'Aligator', 'Cheetah'],
    correctGuess: 3
    },
    {
    question: 'How many hearts does an octopus have?'
    options: ['437', '23', '3', '7']
    correctGuess: 2
    }
    {
    question: 'What is a female donkey called?'
    options: ['A Harry', 'A Belinda', 'A Benny', 'A Jenny']
    correctGuess: 3    
    }
    {
    question: 'How many eyes does a bee have?'
    options: ['1', '5', '59', '6043']
    correctGuess: 1
    }

]
// Make sure to credit opinionstage.com/blog/trivia-questions for the content of the trivia



//Assigning and setting up the countdown feature
let countDown = null;
let time = 60

// Countdown Function

let timer = function () {
    time--
    if (time <= 0) {
        finish();
    }
    let clock = document.getElementById('clock');
    if (clock) {
        clock.textContent = timer;
    }
}

// Function to Begin the Game
function beginGame (event) {
    document.getElementById ('start').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    
}


// Change all get elements and get elements by id/class to jQuery after