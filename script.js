window.onload = function myPage() {
    const container = document.createElement('div');
    container.className = "container";
    let styleContainerQuestions = document.createElement('div');
    styleContainerQuestions.className = "styleContainerQuestions";
    const divH2Quiz = document.createElement('div');
    divH2Quiz.className = "divH2";    
    const quizH2 = document.createElement('h2');
    quizH2.innerHTML = "Quiz Javascript";
    quizH2.className = "quizH2";
    let startQuizButton = document.createElement('button');
    startQuizButton.className = "btnStart";
    startQuizButton.innerHTML = "Start Quiz";
    let nextButton = document.createElement('button');
    nextButton.className = "nextButton";
    nextButton.innerHTML = "Next";
    nextButton.disabled = true;
    let divNextBtn = document.createElement('div');
    divNextBtn.className = "divNextBtn";
    divNextBtn.style.display = "none";

    let questionPosition = 0;
    let score = 0;
    
    document.body.appendChild(divH2Quiz);
    document.body.appendChild(container);
    divH2Quiz.appendChild(quizH2);
    divNextBtn.appendChild(nextButton);
    container.appendChild(divNextBtn);
    container.appendChild(startQuizButton);
    container.appendChild(styleContainerQuestions);
    
function renderQuiz(index, container) {
    container.innerHTML = '';
    const question = questionsAndAnswers[index];
    const questionElement = document.createElement('h2');
    questionElement.innerHTML = question.question;
    questionElement.className = "questionH2";
    container.appendChild(questionElement);
    let alternativesContainer = document.createElement('div');
    alternativesContainer.className = "alternativesContainer";

  question.alternativa.forEach((alternative) => {
    let alternativeDiv = document.createElement('div');
    alternativeDiv.className = "alternativeDiv";    
    let checkbox = document.createElement('input');
    checkbox.type = "radio";
    checkbox.name = `question${index}`;
    checkbox.className = "checkbox";
    let divCheckbox = document.createElement("div");
    divCheckbox.className = "divCheckbox";
    let labelCheck = document.createElement('label');
    labelCheck.className = "labelCheck";
    labelCheck.innerHTML = alternative;        
    divCheckbox.appendChild(checkbox);
    divCheckbox.appendChild(labelCheck);
    alternativeDiv.appendChild(divCheckbox);
    alternativesContainer.appendChild(alternativeDiv);
});
      
      container.appendChild(alternativesContainer);
      
alternativesContainer.addEventListener('change', function(event) {
    if (event.target.type === 'radio' && !event.target.dataset.answered) {
        event.target.dataset.answered = 'true';
        const selectedAnswerIndex = Array.from(alternativesContainer.children).indexOf(event.target.closest('.alternativeDiv'));
          if (selectedAnswerIndex === question.AnswersCorrect) {
            score++;
    }
        nextButton.disabled = false;
        }
  });
}
    
 function final() {
      styleContainerQuestions.innerHTML = '';
      const divFinal = document.createElement("div");
      divFinal.className = "divFinal"
      const message = document.createElement("h2");
      message.innerHTML = "Quiz Concluído";
      message.className = "quizCompleted";
      const yourScore = document.createElement("p");
      yourScore.innerHTML = `Sua pontuação: ${score} of ${questionsAndAnswers.length}`;
      yourScore.className = "scoreStyle"
      const divButtonReload = document.createElement("div")
      divButtonReload.className = "divButtonReload"
      const buttonReload = document.createElement ("button")
      buttonReload.className = "buttonReload"
      buttonReload.innerHTML = "Recomeçar"
      buttonReload.addEventListener('click', function() {
        location.reload();
      });
      divButtonReload.appendChild(buttonReload)
      divFinal.appendChild(message);
      divFinal.appendChild(yourScore);
      divFinal.appendChild(divButtonReload)
      styleContainerQuestions.appendChild(divFinal);
}
    startQuizButton.addEventListener('click', function() {
      renderQuiz(questionPosition, styleContainerQuestions);
      divNextBtn.style.display = "flex";
      this.remove();
    });
    
    nextButton.addEventListener('click', function() {
      questionPosition++;
      if (questionPosition < questionsAndAnswers.length) {
        renderQuiz(questionPosition, styleContainerQuestions);
        nextButton.disabled = true;
    } else {
    divNextBtn.style.display = 'none';
    final();
    }
});
    const questionsAndAnswers = [
      {
        question: "Aonde surgiu o café?",
        alternativa: ["Brasil", "Arábia"],
        AnswersCorrect: 1
      },
      {
        question: "Qual país é o maior produtor de café?",
        alternativa: ["Brasil", "Colômbia"],
        AnswersCorrect: 0
      },
      {
        question:  "Qual é a substância estimulante encontrada no café",
        alternativa: [ "Teína", "Cafeina"],
        AnswersCorrect: 1
      },
      {
        question:  "Qual é o método de preparo de café mais comum?",
        alternativa: [ "Espresso", "Filtro de papel"],
        AnswersCorrect: 1
      },
      {
        question:  " Qual é o processo de retirada dos grãos de café da cereja?",
        alternativa: [ "Torra", "Descascamento"],
        AnswersCorrect: 1
      },
      {
        question:  "6- Qual é a palavra utilizada para descrever o aroma do café moído e recém-preparado?",
        alternativa: [ "Fragrância", " Aroma"],
        AnswersCorrect: 1
      },
      {
        question:  "7- Qual é a bebida que mistura café espresso com uma pequena quantidade de leite vaporizado?",
        alternativa: [ "Cappuccino", " Macchiato"],
        AnswersCorrect: 1
      },
    ];
  };
