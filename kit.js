/* =====================================================================
   НАСТРОЙКИ САЙТА — единственное место, где что-то меняется руками.
   Файл подключают обе страницы: главная (index.html) и уроки
   (course.html), поэтому ссылку на Telegram или название набора
   достаточно поправить здесь один раз.
   ===================================================================== */
const KIT = {
  NAME:       'Arduino Learning',
  SHORT:      'Arduino',              /* для узкого экрана */
  COURSE_URL: 'course.html',          /* уроки            */
  HELP_URL:   'help.html',            /* «Если совсем не идёт» */
  TELEGRAM:   'https://t.me/+Rn4Yd9aB1k84MmQy'
};

/* Семнадцать проектов: номер, название, сложность (звёзды), время в минутах.
   Порядок и названия совпадают с книгой — если в книге что-то переименуешь,
   поправь и здесь. */
const PROJECTS = [
  {n:1,  t:'Мигающий светодиод',        s:1, m:10},
  {n:2,  t:'Светофор',                  s:1, m:15},
  {n:3,  t:'Кнопка и светодиод',        s:1, m:15},
  {n:4,  t:'Мелодия на зуммере',        s:1, m:20},
  {n:5,  t:'RGB-радуга',                s:1, m:15},
  {n:6,  t:'«Hello World» на LCD 1602', s:2, m:40},
  {n:7,  t:'Метеостанция DHT11 + LCD',  s:3, m:45},
  {n:8,  t:'Умный ночник',              s:2, m:25},
  {n:9,  t:'Серво и потенциометр',      s:2, m:25},
  {n:10, t:'Джойстик, серво и RGB',     s:3, m:40},
  {n:11, t:'Кодовый замок',             s:4, m:70},
  {n:12, t:'ИК-пульт управляет LED',    s:2, m:35},
  {n:13, t:'Счётчик 0–9 на индикаторе', s:2, m:35},
  {n:14, t:'Часы 4-разрядные',          s:4, m:70},
  {n:15, t:'Термометр на LM35',         s:2, m:30},
  {n:16, t:'Матрица 8×8 + 74HC595',     s:4, m:80},
  {n:17, t:'Шаговый мотор 28BYJ-48',    s:4, m:50}
];
const NPROJ = PROJECTS.length;

/* Фотографии собранных проектов — те же файлы, что в книге.
   У проекта 16 снимка сборки пока нет, стоит фото самой матрицы. */
const PHOTO = {
  1:'proj1-photo.jpg',    2:'proj2-assembled.jpg', 3:'proj3-assembled.jpg',
  4:'proj4-assembled.jpg', 5:'proj5-photo.jpg',    6:'proj6-photo.jpg',
  7:'proj7-photo.jpg',    8:'proj8-photo.jpg',     9:'proj9-photo.jpg',
  10:'proj10-photo.jpg', 11:'proj11-photo.jpg',   12:'proj12-photo.jpg',
  13:'proj13-photo.jpg', 14:'proj14-photo.jpg',   15:'proj15-photo.jpg',
  16:'comp-31-matrix.jpg', 17:'proj17-photo.jpg'
};

/* Разделы книги, которые не проекты. Человек, открывший коробку первый раз,
   должен начать не с проекта 01, а отсюда — поэтому они стоят на главной
   отдельным рядом, до сетки проектов. */
/* Три ступени курса. Семнадцать карточек подряд — это стена: человек не
   понимает, 17 одинаковых вечеров его ждёт или нет. Разбивка отвечает на
   этот вопрос до того, как он его задал, и ничего не прячет — все карточки
   на месте, просто под тремя тихими подзаголовками. */
const GROUPS = [
  {from:1,  to:5,  t:'Первые шаги',         s:'Светодиоды, кнопка, зуммер — по 10–20 минут каждый'},
  {from:6,  to:10, t:'Экраны и датчики',    s:'Появляются экран, температура, свет и первый мотор'},
  {from:11, to:17, t:'Сложные сборки',      s:'Замок, часы, матрица — на вечер каждая'}
];

const PARTS = [
  {k:'part-1', t:'Знакомство с набором', s:'Что такое Arduino, что лежит в коробке и что ещё понадобится'},
  {k:'part-2', t:'Быстрый старт',        s:'Установить программу, подключить плату — двадцать минут'},
  {k:'part-3', t:'Основы',               s:'Схемы, полярность, резисторы, безопасность, Serial Monitor'},
  {k:'part-4', t:'Навигатор по проектам', s:'Все 17 проектов таблицей: что понадобится и чему научишься'},
  {k:'part-5', t:'Дальше и поддержка',   s:'Что ещё собрать, что докупить, частые вопросы и словарь'}
];

/* =====================================================================
   ПРОГРЕСС
   Отметки живут в браузере покупателя — никакой регистрации и никакого
   сервера. Поэтому они видны только ему и только на этом устройстве;
   это честнее, чем просить человека завести аккаунт ради семнадцати
   галочек. Хранилище может быть недоступно (файл открыт двойным щелчком,
   приватное окно) — тогда отметки просто живут до закрытия вкладки,
   а не роняют страницу.
   ===================================================================== */
const Progress = {
  KEY: 'akg_progress_v1',
  data: {},

  load(){
    try { this.data = JSON.parse(localStorage.getItem(this.KEY) || '{}') || {}; }
    catch(e){ this.data = {}; }
    return this.data;
  },
  save(){ try { localStorage.setItem(this.KEY, JSON.stringify(this.data)); } catch(e){} },

  isDone(n){ return this.data[n] === 'done'; },
  set(n, done){
    if (done) this.data[n] = 'done'; else delete this.data[n];
    this.save();
  },
  doneCount(){ let c = 0; for (const p of PROJECTS) if (this.isDone(p.n)) c++; return c; },

  /* Первый несобранный — это и есть «следующий по программе». Никто ничего
     не нажимает специально, сайт считает это сам. Порядок при этом свободный:
     отметить можно любой проект, подсказка не запрет. */
  firstOpen(){ for (const p of PROJECTS) if (!this.isDone(p.n)) return p.n; return null; },

  /* Сколько времени осталось на несобранное. Проценты ничего не говорят
     человеку: «осталось 65%» — это много или мало? «Ещё часов пять» —
     понятно сразу, и видно, что курс конечный. Время берётся из книги,
     где у каждого проекта оно проставлено. */
  minutesLeft(){
    let m = 0;
    for (const p of PROJECTS) if (!this.isDone(p.n)) m += p.m;
    return m;
  }
};

const two    = (n) => String(n).padStart(2, '0');
const stars  = (n) => '★'.repeat(n) + '☆'.repeat(4 - n);
const projOf = (n) => PROJECTS.find(p => p.n === n) || null;

/* «120 минут» человек в уме не переводит — пишем сразу часами.
   Округляем до получаса: точность тут никому не нужна, важен порядок. */
function humanTime(min){
  if (min < 60) return min + ' мин';
  const h = min / 60;
  const r = Math.round(h * 2) / 2;
  const word = (n) => {
    const a = Math.abs(n) % 100, b = a % 10;
    if (a > 10 && a < 20) return 'часов';
    if (b > 1 && b < 5)   return 'часа';
    if (b === 1)          return 'час';
    return 'часов';
  };
  return (Number.isInteger(r) ? r : r.toFixed(1).replace('.', ',')) + ' ' + word(Math.round(r));
}

/* Кнопка «Не получается». Написать можно только в Telegram-группу набора —
   ссылка-приглашение не умеет нести с собой текст, поэтому готовую первую
   фразу кладём в буфер обмена, а человеку остаётся вставить её и приложить
   фото сборки. По фото причину находят за минуту, по словам «не работает» —
   почти никогда. */
function askHelp(n){
  const p = projOf(n);
  const line = p ? ('Проект ' + two(p.n) + ' · ' + p.t + ' — не получается: ') : 'Не получается: ';
  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext){ navigator.clipboard.writeText(line); copied = true; }
  } catch(e){}
  if (!copied){
    try {
      const ta = document.createElement('textarea');
      ta.value = line; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.focus(); ta.select();
      copied = document.execCommand('copy');
      document.body.removeChild(ta);
    } catch(e){}
  }
  kitToast(copied
    ? 'Начало сообщения скопировано — вставь его в Telegram и приложи фото сборки'
    : 'Напиши в Telegram номер проекта и приложи фото сборки');
  window.open(KIT.TELEGRAM, '_blank', 'noopener');
}

/* Короткое подтверждение внизу экрана. Живёт вне перерисовываемой части
   страницы, поэтому переживает её. */
function kitToast(text){
  let box = document.getElementById('toasts');
  if (!box){
    box = document.createElement('div');
    box.className = 'toasts'; box.id = 'toasts';
    document.body.appendChild(box);
  }
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = text;
  box.appendChild(t);
  requestAnimationFrame(() => t.classList.add('in'));
  setTimeout(() => { t.classList.remove('in'); setTimeout(() => t.remove(), 260); }, 3200);
}
