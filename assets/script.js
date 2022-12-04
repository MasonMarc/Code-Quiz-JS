var questionEl = document.querySelector('.question');
var buttonEl = document.querySelector('.possible');
var cursor = 0;


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
            "a. 10",
            "b. 20",
            "c. 30",
            "d. 40",
        ]
    },
    {
        text: "Question 3",
        correctAnswer: "c",
        possible: [
            "a. 10",
            "b. 20",
            "c. 30",
            "d. 40",
        ]
    },
    {
        text: "Question 4",
        correctAnswer: "d",
        possible: [
            "a. 10",
            "b. 20",
            "c. 30",
            "d. 40",
        ]
    }
]

var correctAnswers = ["a", "b", "c", "d"];

var displayQuestion = function () {
    questionEl.querySelector('h2').textContent = questions[cursor].text;
    buttonEl.querySelector('#a').textContent = questions[0].possible[0];
    buttonEl.querySelector('#b').textContent = questions[0].possible[1];
    buttonEl.querySelector('#c').textContent = questions[0].possible[2];
    buttonEl.querySelector('#d').textContent = questions[0].possible[3];
};

var advance = function (event) {
    var element = event.target;

    console.log(element);

    if (element.matches('.question')) {
        if (cursor < questions.length - 1) {
            var answer = element.dataset.choice === correctAnswers[cursor];
            console.log(answer);
            cursor++;
        }
    }
    displayQuestion();
}

document.addEventListener('click', advance);

displayQuestion();