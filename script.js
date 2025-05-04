window.onload = function minhaPagina() {
const container = document.createElement('div') 
container.className = "container"
let styleQuestions = document.createElement('div')
styleQuestions.className = "styleQuestions"
let divH2Quiz = document.createElement('div')
divH2Quiz.className = "divH2"
const quizH2 = document.createElement('h2');
quizH2.innerHTML = "Quiz Javascript";
quizH2.className = "quizH2";

document.body.appendChild(divH2Quiz)
document.body.appendChild(container);
container.appendChild(styleQuestions)
divH2Quiz.appendChild(quizH2)
}

