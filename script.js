const questions = [
    {
      question: "Какой город является столицей Франции?",
      answers: { A: "Берлин", B: "Лондон", C: "Париж", D: "Мадрид" },
      correct: "C"
    }
  ];
  
  const startSound = document.getElementById('start-sound');
  const backgroundMusic = document.getElementById('background-music');
  const selectSound = document.getElementById('select-sound');
  const correctSound = document.getElementById('correct-sound');
  const incorrectSound = document.getElementById('incorrect-sound');
  
  let currentQuestionIndex = 0;
  let correctScore = 0;
  let incorrectScore = 0;
  
  document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('start-button').style.display = 'none';
    document.querySelector('.game-container').classList.remove('hidden');
    startGame();
  });
  
  function startGame() {
    startSound.play().catch(error => console.log("Error playing start sound:", error));
    backgroundMusic.play().catch(error => console.log("Error playing background music:", error));
    loadQuestion();
  }
  
  function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = questionObj.question;
    document.querySelectorAll('.answer-btn').forEach(btn => {
      const choice = btn.getAttribute('data-choice');
      btn.innerText = questionObj.answers[choice];
      btn.classList.remove('correct', 'incorrect', 'highlighted');
      btn.onclick = () => handleAnswerSelection(choice, btn);
    });
  }
  
  function handleAnswerSelection(choice, btn) {
    selectSound.play().catch(error => console.log("Error playing select sound:", error));
    btn.classList.add('highlighted');
  
    const correctChoice = questions[currentQuestionIndex].correct;
    setTimeout(() => {
      if (choice === correctChoice) {
        btn.classList.remove('highlighted');
        btn.classList.add('correct');
        correctSound.play().catch(error => console.log("Error playing correct sound:", error));
        correctScore++;
        document.getElementById('correct-score').innerText = correctScore;
      } else {
        btn.classList.remove('highlighted');
        btn.classList.add('incorrect');
        incorrectSound.play().catch(error => console.log("Error playing incorrect sound:", error));
        incorrectScore++;
        document.getElementById('incorrect-score').innerText = incorrectScore;
      }
      setTimeout(nextQuestion, 1000);
    }, 5000);
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endGame();
    }
  }
  
  function endGame() {
    backgroundMusic.pause();
    alert("Игра окончена!");
    resetGame();
  }
  
  function resetGame() {
    currentQuestionIndex = 0;
    correctScore = 0;
    incorrectScore = 0;
    document.getElementById('correct-score').innerText = correctScore;
    document.getElementById('incorrect-score').innerText = incorrectScore;
    document.getElementById('start-button').style.display = 'block';
    document.querySelector('.game-container').classList.add('hidden');
  }
  
