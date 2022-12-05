var questionEl = document.querySelector('.question');
var buttonEl = document.querySelector('.possible');
var timeEl = document.querySelector(".time");
var resultEl = document.querySelector(".result");
var timeleft = 100;
var cursor = 0;
var score = 0;


var questions = [
    {
        text: "Question 1",
        correctAnswer: "a",
        possible: [
            "a. 10",
            "b. 20",
            "c. 30",
            "d. 40",
        ]
    },
    {
        text: "Question 2",
        correctAnswer: "b",
        possible: [
            "a. 100",
            "b. 200",
            "c. 300",
            "d. 400",
        ]
    },
    {
        text: "Question 3",
        correctAnswer: "c",
        possible: [
            "a. 1",
            "b. 2",
            "c. 3",
            "d. 4",
        ]
    },
    {
        text: "Question 4",
        correctAnswer: "d",
        possible: [
            "a. a",
            "b. b",
            "c. c",
            "d. d",
        ]
    }
]

var correctAnswers = ["a", "b", "c", "d"];

// Makes boxes display actual text of question object
var displayQuestion = function () {
    questionEl.querySelector('h2').textContent = questions[cursor].text;
    buttonEl.querySelector('#a').textContent = questions[cursor].possible[0];
    buttonEl.querySelector('#b').textContent = questions[cursor].possible[1];
    buttonEl.querySelector('#c').textContent = questions[cursor].possible[2];
    buttonEl.querySelector('#d').textContent = questions[cursor].possible[3];
    if (cursor => questions.length){
        return;
    }
};
// --------------------------------------

// advance on button click function
var advance = function (event) {
    var element = event.target;
    
    console.log(element);
    
    if (element.matches('button')) {
        var answer = element.dataset.choice === correctAnswers[cursor];
        if(answer){
            score++;
        } else{
            timeleft = timeleft-20;
        }
        if (cursor < questions.length-1) {
            console.log(answer);
            cursor++;
            console.log(cursor);
            console.log(score);
            resultEl.textContent = "That was " + answer;
            displayQuestion();
        }
        else {
            buttonEl.style.display = "none";
            questionEl.textContent = "Good Job! " + "You have scored a " + score + "/" + questions.length + "!";
            cursor++;
            // save initial and score in local
            var initials = prompt("Enter your Initials to be saved ini the high scores:");
            localStorage.setItem('Initials', initials);
            localStorage.setItem('Score', score);
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
    }, 100)
}
Timer();
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

// START PAGE END ----------------



document.addEventListener('click', advance);

displayQuestion();