// script.js

const questions = [
    {
      question: "Что значит число 8658129121?",
      answers: { A: "Номер телефона", B: "Наша выручка за год", C: "ID клиента", D: "Тайный шифр" },
      correct: "B"
    },
    {
      question: "?",
      answers: { A: "", B: "", C: "", D: "" },
      correct: "A"
    },
    {
        question: "?",
        answers: { A: "", B: "", C: "", D: "" },
        correct: "A"
      },
      {
        question: "?",
        answers: { A: "", B: "", C: "", D: "" },
        correct: "A"
      },
      {
        question: "?",
        answers: { A: "", B: "", C: "", D: "" },
        correct: "A"
      },
      {
        question: "?",
        answers: { A: "", B: "", C: "", D: "" },
        correct: "A"
      },
      {
        question: "?",
        answers: { A: "", B: "", C: "", D: "" },
        correct: "A"
      },
      {
        question: "?",
        answers: { A: "", B: "", C: "", D: "" },
        correct: "A"
      },
      {
        question: "?",
        answers: { A: "", B: "", C: "", D: "" },
        correct: "A"
      },
    {
      question: "?",
      answers: { A: "", B: "", C: "", D: "" },
      correct: "B"
    }
  ];
  
  let currentQuestionIndex = 0;
  let correctScore = 0;
  let incorrectScore = 0;
  
  function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = questionObj.question;
    document.querySelectorAll('.answer-btn').forEach(btn => {
      const choice = btn.getAttribute('data-choice');
      btn.innerText = questionObj.answers[choice];
      btn.classList.remove('correct', 'incorrect');
      btn.onclick = () => checkAnswer(choice, btn);
    });
  }
  
  function checkAnswer(choice, btn) {
    const correctChoice = questions[currentQuestionIndex].correct;
    if (choice === correctChoice) {
      correctScore++;
      document.getElementById('correct-score').innerText = correctScore;
      btn.classList.add('correct');
    } else {
      incorrectScore++;
      document.getElementById('incorrect-score').innerText = incorrectScore;
      btn.classList.add('incorrect');
    }
  
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        alert("Игра окончена!");
        resetGame();
      }
    }, 1000);
  }
  
  function resetGame() {
    currentQuestionIndex = 0;
    correctScore = 0;
    incorrectScore = 0;
    document.getElementById('correct-score').innerText = correctScore;
    document.getElementById('incorrect-score').innerText = incorrectScore;
    loadQuestion();
  }
  
  loadQuestion();
  
