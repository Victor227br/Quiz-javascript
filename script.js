
window.onload = function myPage() {
const container = document.createElement('div') 
container.className = "container"
let styleContainerQuestions = document.createElement('div')
styleContainerQuestions.className = "styleContainerQuestions"
const divH2Quiz = document.createElement('div')
divH2Quiz.className = "divH2"
const quizH2 = document.createElement('h2');
quizH2.innerHTML = "Quiz Javascript";
quizH2.className = "quizH2";
let startQuizButton = document.createElement('button')
startQuizButton.className = "btnStart"
startQuizButton.innerHTML = "Start Quiz"

document.body.appendChild(divH2Quiz)
document.body.appendChild(container);
container.appendChild(styleContainerQuestions)
divH2Quiz.appendChild(quizH2)
styleContainerQuestions.appendChild(startQuizButton)

startQuizButton.addEventListener('click', function() {
    renderQuiz(questionsAndAnswers, styleContainerQuestions);
    this.remove();
});
renderQuiz(questionsAndAnswers, styleContainerQuestions)

}

const questionsAndAnswers = [
{
question: "Melhor time do Brasil?",
altenativa: ["Corinthians", "Sport Club Corinthians"],
AnswersCorrect: 1
},

{
question: "melhor   time da série b",
altenativa: ["Vasco da gama", "Vasco"],
AnswersCorrect: 0
},
{
question: "A or B",
altenativa: ["A", "B"],
AnswersCorrect: 0
}
]

function renderQuiz(questions, container) {
    questions.forEach(item => {
    let questionH2 = document.createElement('h2');
    questionH2.textContent = item.question;
    container.appendChild(questionH2);
} )
}

// passar para próxima pergunta e tirar a anterior