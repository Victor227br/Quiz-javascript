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
    const questionContainer = document.createElement('div')
    questionContainer.className = "questionContainer"
    questionContainer.appendChild(questionElement)
    container.appendChild(questionContainer);

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
    question: "Qual tipo de dado representa um valor verdadeiro ou falso em JavaScript?",
    alternativa: ["Boolean", "String"],
    AnswersCorrect: 0
  },
  {
    question: "Como você chama uma função nomeada `minhaFuncao`?",
    alternativa: ["call(minhaFuncao)", "minhaFuncao()"],
    AnswersCorrect: 1
  },
  
  {
    question: "Qual método de array executa uma função para cada elemento do array?",
    alternativa: [".map()", ".push()"],
    AnswersCorrect: 0
  },
  {
    question: "Qual método remove o último item de um array?",
    alternativa: [".shift()", ".pop()"],
    AnswersCorrect: 1
  },
   {
    question: "Qual é o escopo de variáveis declaradas com var dentro de uma função?",
    alternativa: ["Escopo de bloco", "Escopo de função"],
    AnswersCorrect: 1
  },

    {
    question: "Qual evento é disparado quando a página termina de carregar?",
    alternativa: ["onload", "onclick"],
    AnswersCorrect: 0
  },

  {
    question: "Como declarar uma constante em JavaScript?",
    alternativa: ["const valor = 10", "let valor = 10"],
    AnswersCorrect: 0
  },
  {
    question: "Qual palavra-chave retorna um valor de dentro de uma função?",
    alternativa: ["break", "return"],
    AnswersCorrect: 1
  },
  {
    question: "Qual método de string remove espaços do início e fim de uma string?",
    alternativa: ["trim()", "slice()"],
    AnswersCorrect: 0
  },
  {
    question: "Qual estrutura de repetição percorre diretamente os valores de um array?",
    alternativa: ["for…in", "for…of"],
    AnswersCorrect: 1
  },

];

}