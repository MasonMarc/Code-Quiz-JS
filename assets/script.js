var questionEl = document.querySelector('.question');
var buttonEl = document.querySelector('.possible');
var cursor = 0;
var score =0;


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

var advance = function (event) {
    var element = event.target;
    
    console.log(element);
    
    if (element.matches('button')) {
        if (cursor < questions.length-1) {
            var answer = element.dataset.choice === correctAnswers[cursor];
            if(answer){
                score++;
            }
            console.log(answer);
            cursor++;
            console.log(cursor);
            console.log(score);
            displayQuestion();
        }
        else {
            buttonEl.style.display = "none";
            questionEl.textContent = "Good Job!" + "You have scored a " + score + "/" + questions.length + "!";
        }
    }
}

document.addEventListener('click', advance);

displayQuestion();