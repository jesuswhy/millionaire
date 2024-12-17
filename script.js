const questions = [
  {
    question: "Что значит число 8000000000?",
    answers: { A: "Номер телефона", B: "ID клиента", C: "Наша примерная выручка за год", D: "Шифр" },
    correct: "C"
  },
{
    question: "Кто такая Настя Goldland?",
    answers: { A: "Наш сотрудник", B: "Покупатель", C: "Знакомая", D: "Поставщик" },
    correct: "B"
  },
{
    question: "Сколько примерно тонн масла мы вывезли за 2024 год?",
    answers: { A: "523 600", B: "140 500", C: "180 200", D: "23" },
    correct: "B"
  },
{
    question: "На сколько рублей вырос курс юаня за год?",
    answers: { A: "на 1,4 рубля", B: "на 1 рубль", C: "не вырос", D: "на 5 рублей" },
    correct: "A"
  },
{
    question: "Что такое RIVER AND OCEAN?",
    answers: { A: "Название хорошего отеля в Турции 4*", B: "Название компании-покупателя", C: "Просто реки и океаны", D: "Название дезодоранта OldSpice" },
    correct: "B"
  },
{
    question: "159 - что это за цифра?",
    answers: { A: "Кол-во поставок в гига таблице", B: "Средняя продолжительность оперативки в понедельник в мин.", C: "Прогноз цены на подсолнечное масло в июне 2025", D: "оттенков подсолнечного масла" },
    correct: "A"
  },
{
    question: "Какая средняя цена закупки подсолнечного масла получилась по 24 году?",
    answers: { A: "75", B: "82", C: "66", D: "77,5" },
    correct: "D"
  },
{
    question: "23 - это…",
    answers: { A: "Количество сделок с Мишей Вилмар", B: "23 семечки в среднем дает один подсолнух в сезон", C: "столько человек в корп.чате", D: "процент маслянистости рапса" },
    correct: "C"
  },
{
    question: "Человек, который заменит тебя во время отпуска называется …",
    answers: { A: "Заменитель", B: "Заменщик", C: "Бадди-партнер", D: "Изменщик" },
    correct: "C"
  },
{
    question: "Самая высокая цена продажи подсолнечного масла была в контракте с …",
    answers: { A: "River and Ocean", B: "XINJIANG", C: "CHINA PLAITED", D: "GENERTEC" },
    correct: "A"
  },
{
    question: "56 - что это за цифра?",
    answers: { A: "Поставщиков в нашей табличке", B: "Столько лет вместе Юле и Лене", C: "56 бутылок шампанского мы выпили на корпоративе в Алтае", D: "56 литров масла в среднем вытекает из 1 контейнера по пути в Китай" },
    correct: "C"
  },


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
  
