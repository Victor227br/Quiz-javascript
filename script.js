window.onload = function myPage() {
const container = document.createElement('div') 
container.className = "container"
const styleContainerQuestions = document.createElement('div')
styleContainerQuestions.className = "styleContainerQuestions"
const divH2Quiz = document.createElement('div')
divH2Quiz.className = "divH2"
const quizH2 = document.createElement('h2');
quizH2.innerHTML = "Quiz Javascript";
quizH2.className = "quizH2";

document.body.appendChild(divH2Quiz)
document.body.appendChild(container);
container.appendChild(styleContainerQuestions)
divH2Quiz.appendChild(quizH2)
}

function getQuestions(){
    questionsAndAnswers.forEach(item => {
        const questionH2 = document.createElement("h2");
        questionH2.textContent = item.question;
        styleContainerQuestions.appendChild(questionH2);
});
}

const questionsAndAnswers = [
{
question: "Melhor time do Brasil?",
altenativa: ["Corinthians", "Sport Club Corinthians"],
AnswersCorrect: 1
},

{
question: "melhor time da série b",
altenativa: ["Vasco da gama", "Vasco"],
AnswersCorrect: 0
},
{
question: "A or B",
altenativa: ["A", "B"],
AnswersCorrect: 0
}
]
