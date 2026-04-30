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
const spyModeSelect = document.getElementById('spyMode');
const spyCountField = document.getElementById('spyCountField');
const spyCountInput = document.getElementById('spyCount');
const wordListInput = document.getElementById('wordList');
const timerModeSelect = document.getElementById('timerMode');
const timerMinutesInput = document.getElementById('timerMinutes');

const spyWords = [
  // Оригинальные + расширенные: 400 слов (без прилагательных)
  'Париж', 'Самолет', 'Секрет', 'Бриллиант', 'Шоколад', 'Музей', 'Океан', 'Супергерой', 'Робот', 'Космос',
  'Мороженое', 'Заповедник', 'Шпион', 'Карта', 'Солнце', 'Попугай', 'Торт', 'Президент', 'Замок', 'Джунгли',
  'Россия', 'Франция', 'Германия', 'Италия', 'Испания', 'Япония', 'Китай', 'Индия', 'Бразилия', 'Канада',
  'Австралия', 'Мексика', 'Египет', 'Турция', 'Греция', 'Норвегия', 'Швеция', 'Швейцария', 'Австрия', 'Нидерланды',
  'Бельгия', 'Польша', 'Чехия', 'Венгрия', 'Португалия', 'Ирландия', 'Исландия', 'Финляндия', 'Дания', 'Латвия',
  'Литва', 'Эстония', 'Украина', 'Беларусь', 'Казахстан', 'Узбекистан', 'Грузия', 'Армения', 'Азербайджан', 'Монголия',
  'Таиланд', 'Вьетнам', 'Индонезия', 'Филиппины', 'Малайзия', 'Сингапур', 'Южная Корея', 'Пакистан', 'Бангладеш', 'Шри-Ланка',
  'Остров', 'Материк', 'Пустыня', 'Лес', 'Степь', 'Тундра', 'Тайга', 'Болото', 'Каньон', 'Водопад',
  'Пещера', 'Ущелье', 'Овраг', 'Скала', 'Берег', 'Мыс', 'Пляж', 'Песок', 'Глина', 'Вулкан',
  'Гейзер', 'Риф', 'Пролив', 'Залив', 'Бухта', 'Лагуна', 'Атолл', 'Фьорд', 'Равнина', 'Холм',
  'Кошка', 'Собака', 'Лошадь', 'Корова', 'Свинья', 'Овца', 'Коза', 'Курица', 'Индюк', 'Кролик',
  'Заяц', 'Лиса', 'Волк', 'Медведь', 'Лев', 'Тигр', 'Слон', 'Жираф', 'Зебра', 'Обезьяна',
  'Пингвин', 'Дельфин', 'Кит', 'Акула', 'Черепаха', 'Змея', 'Ящерица', 'Крокодил', 'Лягушка', 'Сова',
  'Орел', 'Ястреб', 'Ворона', 'Голубь', 'Пеликан', 'Чайка', 'Аист', 'Лебедь', 'Фазан', 'Страус',
  'Эму', 'Кенгуру', 'Коала', 'Панда', 'Енот', 'Барсук', 'Бобр', 'Выдра', 'Еж', 'Крот',
  'Хлеб', 'Масло', 'Сыр', 'Кефир', 'Йогурт', 'Творог', 'Сметана', 'Мясо', 'Рыба', 'Колбаса',
  'Сосиски', 'Яйцо', 'Рис', 'Гречка', 'Пшено', 'Макароны', 'Лапша', 'Суп', 'Борщ', 'Плов',
  'Каша', 'Салат', 'Овощи', 'Фрукты', 'Ягоды', 'Орехи', 'Грибы', 'Сахар', 'Соль', 'Перец',
  'Специи', 'Чай', 'Кофе', 'Какао', 'Сок', 'Вода', 'Лимонад', 'Компот', 'Кисель', 'Печенье',
  'Конфеты', 'Мармелад', 'Пастила', 'Зефир', 'Халва', 'Нуга', 'Ирис', 'Леденец', 'Жвачка', 'Чипсы',
  'Стол', 'Стул', 'Диван', 'Кровать', 'Шкаф', 'Полка', 'Зеркало', 'Картина', 'Часы', 'Лампа',
  'Телефон', 'Компьютер', 'Ноутбук', 'Клавиатура', 'Мышь', 'Монитор', 'Принтер', 'Камера', 'Наушники', 'Колонки',
  'Пульт', 'Телевизор', 'Проектор', 'Экран', 'Кабель', 'Вентилятор', 'Кондиционер', 'Обогреватель', 'Утюг', 'Пылесос',
  'Микроволновка', 'Тостер', 'Чайник', 'Кофеварка', 'Блендер', 'Холодильник', 'Стиралка', 'Посудомойка', 'Сушилка', 'Ножницы',
  'Нож', 'Вилка', 'Ложка', 'Тарелка', 'Чашка', 'Блюдце', 'Стакан', 'Бокал', 'Бутылка', 'Банка',
  'Футболка', 'Рубашка', 'Блузка', 'Свитер', 'Джинсы', 'Брюки', 'Шорты', 'Юбка', 'Платье', 'Костюм',
  'Пальто', 'Куртка', 'Шуба', 'Плащ', 'Жилет', 'Худи', 'Майка', 'Носки', 'Чулки', 'Комбинезон',
  'Пижама', 'Халат', 'Купальник', 'Шапка', 'Кепка', 'Берет', 'Шарф', 'Перчатки', 'Ремень', 'Галстук',
  'Бабочка', 'Брошь', 'Цепочка', 'Кольцо', 'Браслет', 'Серьги', 'Кулон', 'Очки', 'Зонтик', 'Трость',
  'Сумка', 'Рюкзак', 'Чемодан', 'Портфель', 'Кошелек', 'Врач', 'Учитель', 'Инженер', 'Архитектор', 'Художник',
  'Музыкант', 'Писатель', 'Поэт', 'Журналист', 'Фотограф', 'Дизайнер', 'Программист', 'Бухгалтер', 'Юрист', 'Судья',
  'Полицейский', 'Пожарный', 'Военный', 'Моряк', 'Пилот', 'Водитель', 'Машинист', 'Капитан', 'Матрос', 'Штурман',
  'Дипломат', 'Политик', 'Мэр', 'Губернатор', 'Директор', 'Менеджер', 'Продавец', 'Кассир', 'Бармен', 'Повар',
  'Кондитер', 'Пекарь', 'Парикмахер', 'Косметолог', 'Массажист', 'Тренер', 'Спортсмен', 'Рефери', 'Курьер', 'Логист',
  'Любовь', 'Дружба', 'Счастье', 'Грусть', 'Радость', 'Страх', 'Гнев', 'Мир', 'Война', 'Победа',
  'Поражение', 'Успех', 'Риск', 'Опасность', 'Свобода', 'Равенство', 'Справедливость', 'Правда', 'Ложь', 'Тайна',
  'Загадка', 'Мечта', 'Реальность', 'Сон', 'Время', 'Пространство', 'Сила', 'Энергия', 'Скорость', 'Движение',
  'Покой', 'Рост', 'Развитие', 'Прогресс', 'Наука', 'Знание', 'Мудрость', 'Логика', 'Интуиция', 'Память',
  'Воображение', 'Фантазия', 'Талант', 'Навык', 'Опыт', 'Привычка', 'Характер', 'Настроение', 'Вкус', 'Запах',
  'Звук', 'Цвет', 'Форма', 'Размер', 'Вес', 'Температура', 'Давление', 'Свет', 'Тень', 'Блеск',
  'Ретро', 'Классика', 'Модерн', 'Барокко', 'Готика', 'Романтизм', 'Реализм', 'Абстракция', 'Символ', 'Знак',
  'Логотип', 'Эмблема', 'Флаг', 'Герб', 'Гимн', 'Атрибут', 'Реликвия', 'Сувенир', 'Подарок', 'Приз',
  'Медаль', 'Кубок', 'Диплом', 'Сертификат', 'Лицензия', 'Паспорт', 'Виза', 'Билет', 'Пропуск', 'Ключ',
  'Замок', 'Цепь', 'Веревка', 'Нить', 'Ткань', 'Мех', 'Кожа', 'Золото', 'Серебро', 'Медь',
  'Железо', 'Сталь', 'Алюминий', 'Пластик', 'Стекло', 'Дерево', 'Камень', 'Бетон', 'Кирпич', 'Керамика',
  'Фарфор', 'Хрусталь', 'Лондон', 'Берлин', 'Рим', 'Токио', 'Пекин', 'Компас', 'Фонарь', 'Бинокль',
  'Рация', 'Дневник', 'Сокол', 'Рысь', 'Кабан', 'Олень', 'Лось', 'Гора', 'Река', 'Озеро', 'Бронников Антон', 'Воронин Константин', 'Евтеев Юрий', 'Хачатрян Сергий', 'Синицина Полина', 'Борисова Анна', 'Адольф Гитлер','Иосиф Сталин', 'Староизобильная', 'Ставрпольский край'
];

let players = [];
let currentPlayerIndex = 0;
let word = '';
let cardVisible = false;
let timerId = null;
let remainingSeconds = 0;
let timerEnabled = false;
let gameFinished = false;

function saveSettings() {
  localStorage.setItem('spyGame_playerCount', playerCountInput.value);
  localStorage.setItem('spyGame_spyMode', spyModeSelect.value);
  localStorage.setItem('spyGame_spyCount', spyCountInput.value);
  localStorage.setItem('spyGame_wordList', wordListInput.value);
  localStorage.setItem('spyGame_timerMode', timerModeSelect.value);
  localStorage.setItem('spyGame_timerMinutes', timerMinutesInput.value);
}

function loadSettings() {
  const savedPlayerCount = localStorage.getItem('spyGame_playerCount');
  if (savedPlayerCount) playerCountInput.value = savedPlayerCount;

  const savedSpyMode = localStorage.getItem('spyGame_spyMode');
  if (savedSpyMode) spyModeSelect.value = savedSpyMode;

  const savedSpyCount = localStorage.getItem('spyGame_spyCount');
  if (savedSpyCount) spyCountInput.value = savedSpyCount;

  const savedWordList = localStorage.getItem('spyGame_wordList');
  if (savedWordList) wordListInput.value = savedWordList;

  const savedTimerMode = localStorage.getItem('spyGame_timerMode');
  if (savedTimerMode) timerModeSelect.value = savedTimerMode;

  const savedTimerMinutes = localStorage.getItem('spyGame_timerMinutes');
  if (savedTimerMinutes) timerMinutesInput.value = savedTimerMinutes;

  updateSpyFieldVisibility();
}

function updateSpyFieldVisibility() {
  if (spyModeSelect.value === 'manual') {
    spyCountField.style.display = 'block';
  } else {
    spyCountField.style.display = 'none';
  }
}

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
  return spyWords[Math.floor(Math.random() * spyWords.length)];
}

function pickSpyCount(count) {
  if (count <= 2) return 1;
  const random = Math.random();
  if (random < 0.7) return 1;
  if (random < 0.9) return 2;
  if (random < 0.95) return Math.min(3, count);
  return count;
}

function initPlayers() {
  const total = Number(playerCountInput.value) || 2;
  let spyCount;
  if (spyModeSelect.value === 'manual') {
    spyCount = Number(spyCountInput.value) || 1;
    if (spyCount > total) spyCount = total;
    if (spyCount < 1) spyCount = 1;
  } else {
    spyCount = pickSpyCount(total);
  }
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
  saveSettings();
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
  if (timerEnabled) {
    remainingSeconds = Number(timerMinutesInput.value) * 60;
    updateTimerText();
    timerDisplay.classList.remove('hidden');
  }
  showScreen(playScreen);
  // Таймер запускается после того, как все игроки посмотрят роли
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
      // Все посмотрели роли, теперь игра начинается
      cardText.textContent = 'Игра началась! Обсудите и выясните, кто шпион.';
      if (timerEnabled) startTimer();
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
spyModeSelect.addEventListener('change', updateSpyFieldVisibility);
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

// Загрузка сохраненных настроек при запуске
loadSettings();
