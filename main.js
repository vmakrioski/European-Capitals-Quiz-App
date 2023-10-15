const questions = [
  {
    question: "What is the capital of Germany?",
    answers: [
      { text: "Berlin", correct: true },
      { text: "Munich", correct: false },
      { text: "Hamburg", correct: false },
      { text: "Stuttgart", correct: false },
    ],
  },
  {
    question: "What is the capital of Italy?",
    answers: [
      { text: "Venice", correct: false },
      { text: "Milan", correct: false },
      { text: "Naples", correct: false },
      { text: "Rome", correct: true },
    ],
  },
  {
    question: "What is the capital of United Kingdom?",
    answers: [
      { text: "Manchester", correct: false },
      { text: "London", correct: true },
      { text: "Birmingham", correct: false },
      { text: "Glasgow", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Nice", correct: false },
      { text: "Paris", correct: true },
      { text: "Marseille", correct: false },
      { text: "Lyon", correct: false },
    ],
  },
  {
    question: "What is the capital of Switzerland?",
    answers: [
      { text: "Bern", correct: true },
      { text: "Zurich", correct: false },
      { text: "Geneva", correct: false },
      { text: "Lucerne", correct: false },
    ],
  },
  {
    question: "What is the capital of the Netherlands?",
    answers: [
      { text: "Rotterdam", correct: false },
      { text: "The Hague", correct: false },
      { text: "Amsterdam", correct: true },
      { text: "Eindhoven", correct: false },
    ],
  },
  {
    question: "What is the capital of Greece?",
    answers: [
      { text: "Thessaloniki", correct: false },
      { text: "Athens", correct: true },
      { text: "Heraklion", correct: false },
      { text: "Patras", correct: false },
    ],
  },
  {
    question: "What is the capital of Poland?",
    answers: [
      { text: "Warsaw", correct: true },
      { text: "Krakow", correct: false },
      { text: "Lublin", correct: false },
      { text: "Katowice", correct: false },
    ],
  },
  {
    question: "What is the capital of Ukraine?",
    answers: [
      { text: "Odessa", correct: false },
      { text: "Dnipro", correct: false },
      { text: "Kyiv", correct: true },
      { text: "Kharkiv", correct: false },
    ],
  },
  {
    question: "What is the capital of Austria?",
    answers: [
      { text: "Innsbruck", correct: false },
      { text: "Vienna", correct: true },
      { text: "Graz", correct: false },
      { text: "Salzburg", correct: false },
    ],
  },
  {
    question: "What is the capital of Belgium?",
    answers: [
      { text: "Gent", correct: false },
      { text: "Brussels", correct: true },
      { text: "Antwerpen", correct: false },
      { text: "Leauven", correct: false },
    ],
  },
  {
    question: "What is the capital of Sweden?",
    answers: [
      { text: "Gothenburg", correct: false },
      { text: "Malmo", correct: false },
      { text: "Helsingborg", correct: false },
      { text: "Stockholm", correct: true },
    ],
  },
  {
    question: "What is the capital of Norway?",
    answers: [
      { text: "Bergen", correct: false },
      { text: "Stavanger", correct: false },
      { text: "Oslo", correct: true },
      { text: "Trondhein", correct: false },
    ],
  },
  {
    question: "What is the capital of Croatia?",
    answers: [
      { text: "Zagreb", correct: true },
      { text: "Split", correct: false },
      { text: "Rijeka", correct: false },
      { text: "Osijek", correct: false },
    ],
  },
  {
    question: "What is the capital of Denemark?",
    answers: [
      { text: "Arhus", correct: false },
      { text: "Copenhagen", correct: true },
      { text: "Odense", correct: false },
      { text: "Frederiksberg", correct: false },
    ],
  },
  {
    question: "What is the capital of Irland?",
    answers: [
      { text: "Cork", correct: false },
      { text: "Waterford", correct: false },
      { text: "Belfast", correct: false },
      { text: "Dublin", correct: true },
    ],
  },
  {
    question: "What is the capital of Iceland?",
    answers: [
      { text: "Kopavogur", correct: false },
      { text: "Reykjavik", correct: true },
      { text: "Hafnarfjordur", correct: false },
      { text: "Akureyri", correct: false },
    ],
  },
  {
    question: "What is the capital of Romania?",
    answers: [
      { text: "Bucharest", correct: true },
      { text: "Brasov", correct: false },
      { text: "Iasi", correct: false },
      { text: "Constanta", correct: false },
    ],
  },
  {
    question: "What is the capital of Finland?",
    answers: [
      { text: "Tampere", correct: false },
      { text: "Turku", correct: false },
      { text: "Oulu", correct: false },
      { text: "Helsinki", correct: true },
    ],
  },
  {
    question: "What is the capital of Albania?",
    answers: [
      { text: "Tirana", correct: true },
      { text: "Durres", correct: false },
      { text: "Korce", correct: false },
      { text: "Sarande", correct: false },
    ],
  },
  {
    question: "What is the capital of Czech Republic?",
    answers: [
      { text: "Brno", correct: false },
      { text: "Prague", correct: true },
      { text: "Ostrava", correct: false },
      { text: "Pilsen", correct: false },
    ],
  },
  {
    question: "What is the capital of Malta?",
    answers: [
      { text: "Mdina", correct: false },
      { text: "Valletta", correct: true },
      { text: "Rabat", correct: false },
      { text: "Sliema", correct: false },
    ],
  },
  {
    question: "What is the capital of Hungary?",
    answers: [
      { text: "Debrecen", correct: false },
      { text: "Eger", correct: false },
      { text: "Miskolc", correct: false },
      { text: "Budapest", correct: true },
    ],
  },
  {
    question: "What is the capital of Cyprus?",
    answers: [
      { text: "Nicosia", correct: true },
      { text: "Limassol", correct: false },
      { text: "Larnaca", correct: false },
      { text: "Strovolos", correct: false },
    ],
  },
  {
    question: "What is the capital of Serbia?",
    answers: [
      { text: "Nis", correct: false },
      { text: "Subotica", correct: false },
      { text: "Belgrade", correct: true },
      { text: "Kragujevac", correct: false },
    ],
  },
  {
    question: "What is the capital of Bulgaria?",
    answers: [
      { text: "Plovdiv", correct: false },
      { text: "Sofia", correct: true },
      { text: "Varna", correct: false },
      { text: "Burgas", correct: false },
    ],
  },
  {
    question: "What is the capital of Slovenia?",
    answers: [
      { text: "Maribor", correct: false },
      { text: "Kranj", correct: false },
      { text: "Ljubljana", correct: true },
      { text: "Koper", correct: false },
    ],
  },
  {
    question: "What is the capital of Montenegro?",
    answers: [
      { text: "Cetinje", correct: false },
      { text: "Podgorica", correct: true },
      { text: "Budva", correct: false },
      { text: "Kotor", correct: false },
    ],
  },
  {
    question: "What is the capital of Lithuania?",
    answers: [
      { text: "Kaunas", correct: false },
      { text: "Vilnius", correct: true },
      { text: "Palanga", correct: false },
      { text: "Klaipeda", correct: false },
    ],
  },
  {
    question: "What is the capital of Slovakia?",
    answers: [
      { text: "Kosice", correct: false },
      { text: "Preshov", correct: false },
      { text: "Zilina", correct: false },
      { text: "Bratislava", correct: true },
    ],
  },
  {
    question: "What is the capital of Estonia?",
    answers: [
      { text: "Tartu", correct: false },
      { text: "Tallinn", correct: true },
      { text: "Narva", correct: false },
      { text: "Parnu", correct: false },
    ],
  },
  {
    question: "What is the capital of Latvia?",
    answers: [
      { text: "Riga", correct: true },
      { text: "Liepaja", correct: false },
      { text: "Daugavpis", correct: false },
      { text: "Ventspils", correct: false },
    ],
  },
  {
    question: "What is the capital of Kosovo?",
    answers: [
      { text: "Peja", correct: false },
      { text: "Mitrovica", correct: false },
      { text: "Prizren", correct: false },
      { text: "Pristina", correct: true },
    ],
  },
  {
    question: "What is the capital of Bosnia and Herzegovina?",
    answers: [
      { text: "Sarajevo", correct: true },
      { text: "Mostar", correct: false },
      { text: "Banja Luka", correct: false },
      { text: "Bihac", correct: false },
    ],
  },
  {
    question: "What is the capital of Macedonia?",
    answers: [
      { text: "Bitola", correct: false },
      { text: "Skopje", correct: true },
      { text: "Prilep", correct: false },
      { text: "Kumanovo", correct: false },
    ],
  },
  {
    question: "What is the capital of Belarus?",
    answers: [
      { text: "Brest", correct: false },
      { text: "Viciebsk", correct: false },
      { text: "Minsk", correct: true },
      { text: "Gomel", correct: false },
    ],
  },
  {
    question: "What is the capital of Moldova?",
    answers: [
      { text: "Ungheni", correct: false },
      { text: "Kishinev", correct: true },
      { text: "Orhei", correct: false },
      { text: "Edinet", correct: false },
    ],
  },
  {
    question: "What is the capital of Russia?",
    answers: [
      { text: "Moscow", correct: true },
      { text: "Saint Petersburg", correct: false },
      { text: "Novosibirsk", correct: false },
      { text: "Kazan", correct: false },
    ],
  },
  {
    question: "What is the capital of Portugal?",
    answers: [
      { text: "Porto", correct: false },
      { text: "Lisabon", correct: true },
      { text: "Coimbra", correct: false },
      { text: "Braga", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
