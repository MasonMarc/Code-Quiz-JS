var questionEl = document.querySelector('.question');
var buttonEl = document.querySelector('.possible');
var timeEl = document.querySelector(".time");
var resultEl = document.querySelector(".result");
var mainEl = document.querySelector('.wrapper');
var timeleft = 100;
var cursor = 0;
var score = 0;

// object of all possible
var questions = [
    {
        text: "What Does 'HTML' Stand for?",
        correctAnswer: "a",
        possible: [
            "a. HyperText Markup Language",
            "b. Homing Text Mobile Language",
            "c. Hartman Tonic Meyers Lang",
            "d. Hacking Text Markup Language",
        ]
    },
    {
        text: "What is an element in JavaScript that can only be either a 'True' or a 'False' value?",
        correctAnswer: "b",
        possible: [
            "a. Variable",
            "b. Boolean",
            "c. String",
            "d. Event",
        ]
    },
    {
        text: "What does 'CSS' stand for?",
        correctAnswer: "c",
        possible: [
            "a. Computer Style Source",
            "b. Cucumber Sriracha Salad",
            "c. Cascading Style Sheets",
            "d. Coding Sheet Syntax",
        ]
    },
    {
        text: "In Javascript, what is the method to remove the last object of an array",
        correctAnswer: "d",
        possible: [
            "a. array - 1",
            "b. array.reduce()",
            "c. array.remove()",
            "d. array.pop()",
        ]
    }
]

var correctAnswers = ["a", "b", "c", "d"];

// Makes boxes display actual text of question object
function displayQuestion() {
    startEl.style.display = "none";
    mainEl.style.display = "flex";
    Timer();
    questionEl.querySelector('h2').textContent = questions[cursor].text;
    buttonEl.querySelector('#a').textContent = questions[cursor].possible[0];
    buttonEl.querySelector('#b').textContent = questions[cursor].possible[1];
    buttonEl.querySelector('#c').textContent = questions[cursor].possible[2];
    buttonEl.querySelector('#d').textContent = questions[cursor].possible[3];
    if (cursor >= questions.length){
        return;
    }
};
// --------------------------------------

// advance on button click function
function advance(event) {
    var element = event.target;
 
    if (element.matches('button')) {
        var answer = element.dataset.choice === correctAnswers[cursor];
        if(answer){
            score++;
        } else{
            timeleft = timeleft-20;
        }
        if (cursor < questions.length-1) {      
            cursor++;
            resultEl.textContent = "That was " + answer;
            displayQuestion();
        }
        else {
            buttonEl.style.display = "none";
            questionEl.textContent = "Good Job! " + "You have scored a " + score + "/" + questions.length + "!";
            cursor++;
            // save initial and score in local
            var initials = prompt("Enter your Initials to be saved in the high score:");
            localStorage.setItem('Initials', initials);
            localStorage.setItem('Score', score);
            // now make functionality for high scores to stack on completion to allow for multiple scores
        }
    }
}

// ---------------------------------

// TIMER ----------------------------
function Timer(){
    var interval = setInterval(function(){
        timeleft--;
        timeEl.textContent = "Time: " + timeleft;
        if(timeleft == 0 || timeleft<0) {
            timeleft == 0;
            clearInterval(interval);
        }
        if(cursor == questions.length){
            clearInterval(interval);
        }
        // If time ends, game ends
        if (timeleft ==0 ||timeleft <0){
            buttonEl.style.display = "none";
            questionEl.textContent = "Out of Time! " + "You have scored a " + score + "/" + questions.length + "!";
        }
    }, 1000)
}

// END TIMER ----------------------------------


// HIGH SCORE ------------------
var highEl = document.getElementById('highscore');
function highscore(){
    alert("User: " + localStorage.getItem('Initials') + " Score: " + localStorage.getItem('Score'));
}
highEl.addEventListener('click', highscore);
// END HIGH SCORE -----------------

// START PAGE  -----------------
// make html elements outside of wrapper that has button and header such that when you hit the button the new elements are hidden and the wrapper is shown and timer function and display question are run
var startEl = document.getElementById('intro');

mainEl.style.display = "none";
function start(){
    displayQuestion();
}
startEl.addEventListener('click', start);
// START PAGE END ----------------


buttonEl.addEventListener('click', advance);
