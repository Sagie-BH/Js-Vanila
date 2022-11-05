import Quiz from './quiz.js';
import Question from './question.js';
import Animation from './animation.js';

const elementQuestion = document.getElementById('question');
const btnGrid = document.getElementById('btn-grid');
const choiceButtons = document.getElementsByClassName('choiceBtn');

document.getElementById('goNext').addEventListener('click', goToNextQuestion);
document.getElementById('goBack').addEventListener('click', goToPrevQeustion);

document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('quizGrid').classList.add('fadeOutRight');
    setTimeout(function () {
        document.getElementById('contact-form').classList.add('hide');
        document.getElementById('question-area').classList.remove('hide');
        document.getElementById('progress-area').classList.remove('hide');
        document.getElementById('quizGrid').classList.remove('fadeOutRight');
    }, 400);
});

// let tries = 0;
let questions = [
    new Question('2 + 1 =', ["3", "2", "1", "0"], "3"),
    new Question('1 + 2 =', ["4", "3", "2", "1"], "3"),
    new Question('4 + 1 =', ["6", "7", "5", "3"], "5"),
    new Question('2 + 6 =', ["9", "8", "2", "7"], "8"),
    new Question('7 + 2 =', ["2", "9", "4", "6"], "9")
];

let quiz = new Quiz(questions)

quiz.questions.sort(() => Math.random() - 0.5);

function pupolateQuiz(question) {
    if (!quiz.isEnded()) {
        elementQuestion.innerHTML = question.text;
        createAnswerButtons(question);
        addBtnClickEvent(question, quiz);
        Animation.setButtonAnimation();
        // quiz.totalScore += (qObj.questionScore * qObj.tries);
        // console.log(quiz.totalScore);
    }
}

function createAnswerButtons(question) {
    btnGrid.innerHTML = '';
    let shuffledChoices = question.choices.sort(() => Math.random() - 0.5);
    shuffledChoices.forEach((choice, i) => {
        btnGrid.innerHTML +=
            `<button class="choiceBtn animated" id="btn${i}"><span>${choice}</span></button>`;
    });
}


function addBtnClickEvent(question, quiz) {
    Array.from(choiceButtons).forEach(choiceBtn => choiceBtn.addEventListener('click', () => {
        if (choiceBtn.firstElementChild.innerHTML === question.answer) {
            console.log('yipi');
            elementQuestion.innerHTML += ` ${question.answer}`;
            moveOn();
            // quiz.totalScore += (question.questionScore / tries);
            // console.log(quiz.totalScore);
            quiz.currentIndex++;
        } else {
            console.log('oh-no');
        }
    }))
}

function goToNextQuestion() {
    if (quiz.currentIndex < quiz.questions.length - 1) {
        pupolateQuiz(quiz.questions[++quiz.currentIndex]);
    }
    else {
        elementQuestion.innerHTML = 'Done';
        btnGrid.innerHTML = '';
        Array.from(document.getElementsByClassName('nav-buttons')).forEach(btn => {
            btn.classList.add('hide');
        })
    }
}
function goToPrevQeustion() {
    pupolateQuiz(quiz.questions[quiz.currentIndex--]);
}

pupolateQuiz(quiz.questions[quiz.currentIndex]);