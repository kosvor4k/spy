const setupScreen = document.getElementById('setupScreen');
const playScreen = document.getElementById('playScreen');
const resultScreen = document.getElementById('resultScreen');
const startButton = document.getElementById('startButton');
const newGameButton = document.getElementById('newGameButton');
const cardButton = document.getElementById('cardButton');
const cardText = document.getElementById('cardText');
const currentPlayerLabel = document.getElementById('currentPlayerLabel');
const totalPlayersLabel = document.getElementById('totalPlayersLabel');
const timerDisplay = document.getElementById('timerDisplay');
const stopTimerButton = document.getElementById('stopTimerButton');
const endRoundButton = document.getElementById('endRoundButton');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');

const playerCountInput = document.getElementById('playerCount');
const wordListInput = document.getElementById('wordList');
const timerModeSelect = document.getElementById('timerMode');
const timerMinutesInput = document.getElementById('timerMinutes');

const sampleWords = [
  'Париж', 'Самолет', 'Секрет', 'Бриллиант', 'Шоколад', 'Музей', 'Океан', 'Супергерой', 'Робот', 'Космос',
  'Мороженое', 'Заповедник', 'Шпион', 'Карта', 'Солнце', 'Попугай', 'Торт', 'Президент', 'Замок', 'Джунгли'
];

let players = [];
let currentPlayerIndex = 0;
let word = '';
let cardVisible = false;
let timerId = null;
let remainingSeconds = 0;
let timerEnabled = false;
let gameFinished = false;

function showScreen(screen) {
  setupScreen.classList.remove('active');
  playScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  screen.classList.add('active');
}

function getRandomWord() {
  const customText = wordListInput.value.trim();
  if (customText) {
    const customWords = customText
      .split('\n')
      .map(item => item.trim())
      .filter(Boolean);
    if (customWords.length) {
      return customWords[Math.floor(Math.random() * customWords.length)];
    }
  }
  return sampleWords[Math.floor(Math.random() * sampleWords.length)];
}

function pickSpyCount(count) {
  if (count <= 2) return 1;
  const random = Math.random();
  if (random < 0.78) return 1;
  if (random < 0.95) return 2;
  if (random < 0.995) return Math.min(3, count);
  return count;
}

function initPlayers() {
  const total = Number(playerCountInput.value) || 2;
  const spyCount = pickSpyCount(total);
  const roles = Array.from({length: total}, () => 'player');
  for (let i = 0; i < spyCount; i++) {
    roles[i] = 'spy';
  }
  for (let i = roles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [roles[i], roles[j]] = [roles[j], roles[i]];
  }
  players = roles.map((role, index) => ({
    id: index + 1,
    role,
    seen: false,
  }));
}

function startTimer() {
  if (!timerEnabled) return;
  timerDisplay.classList.remove('hidden');
  remainingSeconds = Number(timerMinutesInput.value) * 60;
  updateTimerText();
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    if (remainingSeconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      timerDisplay.textContent = '00:00';
      finishGame('Время вышло', 'Таймер закончился. Шпион выигрывает!');
      return;
    }
    updateTimerText();
  }, 1000);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  timerDisplay.classList.add('hidden');
}

function updateTimerText() {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
  const seconds = String(remainingSeconds % 60).padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startGame() {
  const total = Number(playerCountInput.value);
  if (!total || total < 2) {
    alert('Введите количество игроков от 2 до 12.');
    return;
  }
  if (total > 12) {
    alert('Максимум 12 игроков.');
    return;
  }
  timerEnabled = timerModeSelect.value === 'on';
  currentPlayerIndex = 0;
  cardVisible = false;
  gameFinished = false;
  word = getRandomWord();
  initPlayers();
  totalPlayersLabel.textContent = String(total);
  currentPlayerLabel.textContent = String(currentPlayerIndex + 1);
  cardText.textContent = 'Нажмите карту, чтобы узнать свою роль';
  timerDisplay.textContent = '00:00';
  timerDisplay.classList.add('hidden');
  showScreen(playScreen);
  if (timerEnabled) startTimer();
}

function revealCurrentCard() {
  const currentPlayer = players[currentPlayerIndex];
  if (!currentPlayer) return;
  if (!cardVisible) {
    cardVisible = true;
    if (currentPlayer.role === 'spy') {
      cardText.textContent = 'Вы шпион! Сыграйте уверенно и постарайтесь не выдать себя.';
    } else {
      cardText.textContent = `Ваше слово: ${word}`;
    }
  } else {
    cardVisible = false;
    currentPlayer.seen = true;
    currentPlayerIndex += 1;
    if (currentPlayerIndex >= players.length) {
      finishGame('Все посмотрели карты', 'Передайте ход обсуждению и выяснению, кто шпион.');
      return;
    }
    currentPlayerLabel.textContent = String(currentPlayerIndex + 1);
    cardText.textContent = 'Нажмите карту, чтобы узнать свою роль';
  }
}

function finishGame(title, message) {
  if (gameFinished) return;
  gameFinished = true;
  stopTimer();
  resultTitle.textContent = title;
  resultMessage.textContent = message;
  showScreen(resultScreen);
}

function resetGame() {
  stopTimer();
  showScreen(setupScreen);
}

cardButton.addEventListener('click', revealCurrentCard);
startButton.addEventListener('click', startGame);
newGameButton.addEventListener('click', resetGame);
stopTimerButton.addEventListener('click', () => {
  stopTimer();
  alert('Таймер остановлен. Вы можете завершить игру или продолжить без отсчета времени.');
});
endRoundButton.addEventListener('click', () => {
  finishGame('Игра завершена', 'Вы завершили игру вручную.');
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && setupScreen.classList.contains('active')) {
    startGame();
  }
});
