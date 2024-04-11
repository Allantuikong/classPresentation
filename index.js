// The Quiz Questions
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    C: "Python",
    d: "JavaScript",
    correct: "d",
  },

  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cascading Styling Sheets",
    correct: "b",
  },

  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Hypermass Terminal Markdown Language",
    correct: "a",
  },

  {
    question: "Which year was Javascript Launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "2010",
    correct: "b",
  },
];

// Get HTML elements and store in variables.
const quiz = document.getElementById("quiz");
const allAnswers = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0; // Index of current question being displayed
let score = 0; // Total Score of the user
loadQuiz(); // function that loads the current quiz question to the page. Updates question text and answers options based on current quiz index

// Function that loads our questions and answers based on current quiz index.
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  question.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

// Clears all previously selected answers
function deselectAnswers() {
  allAnswers.forEach((answer) => (answer.checked = false));
}

// Retrieves ID of the selected Answer
function getSelected() {
  let selectedAnswer;
  allAnswers.forEach((answer) => {
    if (answer.checked) {
      selectedAnswer = answer.id;
    }
  });
  return selectedAnswer;
}

submitbtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
     <h2> You answered ${score}/${quizData.length} questions correctly </h2>
     <button onclick="location.reload()">Reload</button>
     `;
  }
});
