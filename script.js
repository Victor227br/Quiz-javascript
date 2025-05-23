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
let nextButton = document.createElement('button')
nextButton.className = "nextButton"
nextButton.innerHTML = "Next"
let divNextBtn = document.createElement('div')
divNextBtn.className = "divNextBtn"
divNextBtn.style.display = "none"

let QuestionPosition = 0
let score = 0

document.body.appendChild(divH2Quiz)
document.body.appendChild(container);
divH2Quiz.appendChild(quizH2)
divNextBtn.appendChild(nextButton)
container.appendChild(divNextBtn)
container.appendChild(startQuizButton)
container.appendChild(styleContainerQuestions)

function renderQuiz(position, container) {
container.innerHTML = '';
const questionElement = document.createElement('h2');
questionElement.textContent = questionsAndAnswers[position].question;
container.appendChild(questionElement); 
questionElement.className ="questionH2"

const alternativesContainer = document.createElement('div');
alternativesContainer.className = "alternatives-container";
questionsAndAnswers[position].alternativa.forEach((alternative) => {
const alternativeDiv = document.createElement('div');
alternativeDiv.className = "alternativeDiv";

const checkbox = document.createElement('input');
checkbox.type = "radio"; 
checkbox.name = "alternative"; 
checkbox.className = "checkbox"
const divCheckbox = document.createElement ("div")
divCheckbox.className = "divCheckbox"
const labelCheck = document.createElement('label');
labelCheck.className = "labelCheck"
labelCheck.textContent = alternative;    
divCheckbox.appendChild(checkbox)
divCheckbox.appendChild(labelCheck);
alternativeDiv.appendChild(divCheckbox);
alternativesContainer.appendChild(alternativeDiv);
container.appendChild(alternativesContainer);
checkbox.addEventListener('change', function(){
 if(this.checked){
  questionsAndAnswers[position].selecte = alternative
 }

function checkout (alternative) {
    let val = alternative.value;
    if(checkbox.checked) {
    console.log('')
}
else{
     console.log("vasco da gama")
}

}
console.log(alternative)
} )
} );

}
startQuizButton.addEventListener('click', function() {
renderQuiz(QuestionPosition, styleContainerQuestions);
divNextBtn.style.display = "flex";
this.remove()
nextButton.addEventListener('click', function() {
QuestionPosition = (QuestionPosition + 1)  
renderQuiz(QuestionPosition, styleContainerQuestions); 
});



})
const questionsAndAnswers = [
{
question: "Melhor time do Brasil?",
alternativa: ["Corinthians", "Sport Club Corinthians"],
AnswersCorrect: 1
},

{
 question: "melhor   time da série b",
 alternativa: ["Vasco da gama", "Vasco"],
 AnswersCorrect: 0
 },
 {
 question: "A or B",
 alternativa: ["A", "B"],
 AnswersCorrect: 0
 }
]

}