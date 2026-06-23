const MAISON = [];
const NOURRITURE = [];
const FAMILLE = [];
const VILLE = [];
const TEMPS = [];
const ECOLE = [];
const VERBES = [];
MAISON.push(
  { word: "дом", translation: "maison", level: "A1", category: "maison", gender: "masculin", plural: "дома", example: "Я живу в доме.", correct: 0, wrong: 0, mastery: 0 },
  { word: "окно", translation: "fenêtre", level: "A1", category: "maison", gender: "neutre", plural: "окна", example: "Окно открыто.", correct: 0, wrong: 0, mastery: 0 },
  { word: "дверь", translation: "porte", level: "A1", category: "maison", gender: "féminin", plural: "двери", example: "Дверь закрыта.", correct: 0, wrong: 0, mastery: 0 },
  { word: "стол", translation: "table", level: "A1", category: "maison", gender: "masculin", plural: "столы", example: "Стол большой.", correct: 0, wrong: 0, mastery: 0 },
  { word: "стул", translation: "chaise", level: "A1", category: "maison", gender: "masculin", plural: "стулья", example: "Стул удобный.", correct: 0, wrong: 0, mastery: 0 },
  { word: "кровать", translation: "lit", level: "A1", category: "maison", gender: "féminin", plural: "кровати", example: "Кровать мягкая.", correct: 0, wrong: 0, mastery: 0 },
  { word: "кухня", translation: "cuisine", level: "A1", category: "maison", gender: "féminin", plural: "кухни", example: "Я на кухне.", correct: 0, wrong: 0, mastery: 0 },
  { word: "ванная", translation: "salle de bain", level: "A1", category: "maison", gender: "féminin", plural: "ванные", example: "Я в ванной.", correct: 0, wrong: 0, mastery: 0 },
  { word: "комната", translation: "pièce", level: "A1", category: "maison", gender: "féminin", plural: "комнаты", example: "Комната большая.", correct: 0, wrong: 0, mastery: 0 },
  { word: "пол", translation: "sol", level: "A1", category: "maison", gender: "masculin", plural: "полы", example: "Пол чистый.", correct: 0, wrong: 0, mastery: 0 }
);
NOURRITURE.push(
  { word: "хлеб", translation: "pain", level: "A1", category: "nourriture", gender: "masculin", plural: "хлебы", example: "Я ем хлеб.", correct: 0, wrong: 0, mastery: 0 },
  { word: "вода", translation: "eau", level: "A1", category: "nourriture", gender: "féminin", plural: "—", example: "Я пью воду.", correct: 0, wrong: 0, mastery: 0 },
  { word: "молоко", translation: "lait", level: "A1", category: "nourriture", gender: "neutre", plural: "—", example: "Молоко холодное.", correct: 0, wrong: 0, mastery: 0 },
  { word: "мясо", translation: "viande", level: "A1", category: "nourriture", gender: "neutre", plural: "—", example: "Я ем мясо.", correct: 0, wrong: 0, mastery: 0 },
  { word: "рыба", translation: "poisson", level: "A1", category: "nourriture", gender: "féminin", plural: "рыбы", example: "Рыба вкусная.", correct: 0, wrong: 0, mastery: 0 },
  { word: "яблоко", translation: "pomme", level: "A1", category: "nourriture", gender: "neutre", plural: "яблоки", example: "Я ем яблоко.", correct: 0, wrong: 0, mastery: 0 },
  { word: "сыр", translation: "fromage", level: "A1", category: "nourriture", gender: "masculin", plural: "сыры", example: "Сыр вкусный.", correct: 0, wrong: 0, mastery: 0 },
  { word: "соль", translation: "sel", level: "A1", category: "nourriture", gender: "féminin", plural: "—", example: "Соль белая.", correct: 0, wrong: 0, mastery: 0 },
  { word: "сахар", translation: "sucre", level: "A1", category: "nourriture", gender: "masculin", plural: "—", example: "Сахар сладкий.", correct: 0, wrong: 0, mastery: 0 },
  { word: "чай", translation: "thé", level: "A1", category: "nourriture", gender: "masculin", plural: "—", example: "Я пью чай.", correct: 0, wrong: 0, mastery: 0 }
);
FAMILLE.push(
  { word: "мать", translation: "mère", level: "A1", category: "famille", gender: "féminin", plural: "матери", example: "Моя мать дома.", correct: 0, wrong: 0, mastery: 0 },
  { word: "отец", translation: "père", level: "A1", category: "famille", gender: "masculin", plural: "отцы", example: "Мой отец работает.", correct: 0, wrong: 0, mastery: 0 }
);

VILLE.push(
  { word: "город", translation: "ville", level: "A1", category: "ville", gender: "masculin", plural: "города", example: "Москва — большой город.", correct: 0, wrong: 0, mastery: 0 },
  { word: "улица", translation: "rue", level: "A1", category: "ville", gender: "féminin", plural: "улицы", example: "Я на улице.", correct: 0, wrong: 0, mastery: 0 }
);

TEMPS.push(
  { word: "день", translation: "jour", level: "A1", category: "temps", gender: "masculin", plural: "дни", example: "Сегодня хороший день.", correct: 0, wrong: 0, mastery: 0 },
  { word: "ночь", translation: "nuit", level: "A1", category: "temps", gender: "féminin", plural: "ночи", example: "Ночь холодная.", correct: 0, wrong: 0, mastery: 0 }
);

ECOLE.push(
  { word: "школа", translation: "école", level: "A1", category: "école", gender: "féminin", plural: "школы", example: "Я иду в школу.", correct: 0, wrong: 0, mastery: 0 }
);

VERBES.push(
  { word: "говорить", translation: "parler", level: "A1", category: "verbes", gender: "—", plural: "—", example: "Я говорю по-русски.", correct: 0, wrong: 0, mastery: 0 },
  { word: "есть", translation: "manger", level: "A1", category: "verbes", gender: "—", plural: "—", example: "Я ем яблоко.", correct: 0, wrong: 0, mastery: 0 },
  { word: "идти", translation: "aller à pied", level: "A1", category: "verbes", gender: "—", plural: "—", example: "Я иду домой.", correct: 0, wrong: 0, mastery: 0 },
  { word: "делать", translation: "faire", level: "A1", category: "verbes", gender: "—", plural: "—", example: "Я делаю работу.", correct: 0, wrong: 0, mastery: 0 },
  { word: "жить", translation: "vivre", level: "A1", category: "verbes", gender: "—", plural: "—", example: "Я живу в Лионе.", correct: 0, wrong: 0, mastery: 0 },
  { word: "работать", translation: "travailler", level: "A1", category: "verbes", gender: "—", plural: "—", example: "Я работаю.", correct: 0, wrong: 0, mastery: 0 },
  { word: "понимать", translation: "comprendre", level: "A1", category: "verbes", gender: "—", plural: "—", example: "Я понимаю.", correct: 0, wrong: 0, mastery: 0 },
  { word: "учить", translation: "apprendre", level: "A1", category: "verbes", gender: "—", plural: "—", example: "Я учу русский.", correct: 0, wrong: 0, mastery: 0 }
);
const VOCAB = [
  ...MAISON,
  ...NOURRITURE,
  ...FAMILLE,
  ...VILLE,
  ...TEMPS,
  ...ECOLE,
  ...VERBES
];