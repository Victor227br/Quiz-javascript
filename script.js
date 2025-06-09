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

    let questionPosition = 0;
    let score = 0;
    
    document.body.appendChild(divH2Quiz);
    document.body.appendChild(container);
    divH2Quiz.appendChild(quizH2);
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

    question.alternativa.forEach((alternative, indice) => {
    let button = document.createElement('button');
    button.className = "alternativeButton";
    button.innerHTML = alternative;
    button.addEventListener('click', () => {
    if (indice === question.AnswersCorrect) {
       score++;
  }
questionPosition++;
    if (questionPosition < questionsAndAnswers.length) {
     renderQuiz(questionPosition, container);
    } else {
        final();
      } 
     });
alternativesContainer.appendChild(button);
    });

container.appendChild(alternativesContainer);
}
    
  function final() {
    styleContainerQuestions.innerHTML = '';
    const divFinal = document.createElement("div");
    divFinal.className = "divFinal";
    const message = document.createElement("h2");
    message.innerHTML = "Quiz Concluído";
    message.className = "quizCompleted";
    const yourScore = document.createElement("p");
    yourScore.innerHTML = `Sua pontuação: ${score} de ${questionsAndAnswers.length}`;
    yourScore.className = "scoreStyle";
    const divButtonReload = document.createElement("div");
    divButtonReload.className = "divButtonReload";
    const buttonReload = document.createElement("button");
    buttonReload.className = "buttonReload";
    buttonReload.innerHTML = "Recomeçar";
    buttonReload.addEventListener('click', function () {
        location.reload();
        });

        divButtonReload.appendChild(buttonReload);
        divFinal.appendChild(message);
        divFinal.appendChild(yourScore);
        divFinal.appendChild(divButtonReload);
        styleContainerQuestions.appendChild(divFinal);
    }

    startQuizButton.addEventListener('click', function () {
        renderQuiz(questionPosition, styleContainerQuestions);
        this.remove();
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
            question: "Qual é a substância estimulante encontrada no café?",
            alternativa: ["Teína", "Cafeína"],
            AnswersCorrect: 1
        },
        {
            question: "Qual é o método de preparo de café mais comum?",
            alternativa: ["Espresso", "Filtro de papel"],
            AnswersCorrect: 1
        },
        {
            question: "Qual é o processo de retirada dos grãos de café da cereja?",
            alternativa: ["Torra", "Descascamento"],
            AnswersCorrect: 1
        },
        {
            question: "Qual é a palavra utilizada para descrever o aroma do café moído e recém-preparado?",
            alternativa: ["Fragrância", "Aroma"],
            AnswersCorrect: 1
        },
        {
            question: "Qual é a bebida que mistura café espresso com uma pequena quantidade de leite vaporizado?",
            alternativa: ["Cappuccino", "Macchiato"],
            AnswersCorrect: 1
        }
    ];
};
