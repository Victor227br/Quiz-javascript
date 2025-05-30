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

    function renderQuiz(index, container) {
    container.innerHTML = '';
    let questionElement = document.createElement('h2');
    questionElement.innerHTML = questionsAndAnswers[index].question;
    container.appendChild(questionElement); 
    questionElement.className ="questionH2"
    let alternativesContainer = document.createElement('div');
    alternativesContainer.className = "alternativesContainer";
    questionsAndAnswers[index].alternativa.forEach((alternative, indexPositionAwerser) => {
    let alternativeDiv = document.createElement('div');
    alternativeDiv.className = "alternativeDiv";

    // console.log(alternative)
    let checkbox = document.createElement('input');
    checkbox.type = "radio"; 
    checkbox.name = "alternative"; 
    checkbox.className = "checkbox"
    let divCheckbox = document.createElement ("div")
    divCheckbox.className = "divCheckbox"
    let labelCheck = document.createElement('label');
    labelCheck.className = "labelCheck"
    labelCheck.innerHTML = alternative;    
    divCheckbox.appendChild(checkbox)
    divCheckbox.appendChild(labelCheck);
    alternativeDiv.appendChild(divCheckbox);
    alternativesContainer.appendChild(alternativeDiv);
    container.appendChild(alternativesContainer);
    
    checkbox.addEventListener('change', function(){
    if(checkbox.checked){
        questionsAndAnswers[index].selecte = alternative
        nextButton.removeAttribute('disabled');
} 

 if(checkbox.checked ){
    const resposta = indexPositionAwerser
    const AsweserCorrect = questionsAndAnswers[index].AnswersCorrect
        if(resposta === AsweserCorrect){
        console.log("acertouuuu")
        score ++
} 
}    
    console.log(score + "pontos")
    // console.log(alternative + "alternativeClick")
    // console.log(index + "index")
})
});
}
function final (){
    styleContainerQuestions = " "
    const divFinal = document.createElement ("div")
    const message = document.createElement ("h2")
    message.innerHTML = "Quiz Completed"
    message.className =  "quizCompleted"
    const yourScore = ("p")
    yourScore.innerHTML = `Your Score: ${score} of ${questionsAndAnswers.length}`
    divFinal.appendChild(message)
    divFinal.appendChild(yourScore)
    styleContainerQuestions.appendChild(divFinal)
    }

    startQuizButton.addEventListener('click', function() {
    renderQuiz(QuestionPosition, styleContainerQuestions);
    divNextBtn.style.display = "flex";
    this.remove()
    nextButton.addEventListener('click', function() {
        //  QuestionPosition = (QuestionPosition + 1)  
        QuestionPosition ++

    if (QuestionPosition < questionsAndAnswers.length) {
    renderQuiz(QuestionPosition, styleContainerQuestions);
} else {
    styleContainerQuestions = " "
    divNextBtn.style.display = 'none';
    final(); 
}  

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
