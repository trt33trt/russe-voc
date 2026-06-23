let currentIndex = 0;
let showingRussian = true;
let selectedCategory = "all";
// =======================
// NAVIGATION ONGLET
// =======================
function showTab(tab) {
  document.getElementById("lessons").style.display = "none";
  document.getElementById("training").style.display = "none";

  document.getElementById(tab).style.display = "block";
}

// =======================
// INIT LEÇONS
// =======================
function renderLessons() {
  const container = document.getElementById("vocabList");

  const vocab = getFilteredVocab();

  container.innerHTML = vocab.map(v => `
    <div class="word-block">
      <h3>${v.word} → ${v.translation}</h3>
      <p><b>Genre:</b> ${v.gender}</p>
      <p><b>Pluriel:</b> ${v.plural}</p>
      <p><b>Exemple:</b> ${v.example}</p>
      <p><b>Thème:</b> ${v.category}</p>
      <p><b>Maîtrise:</b> ${v.mastery ?? 0}%</p>
    </div>
  `).join("");
}
// =======================
// FLASHCARDS
// =======================
function startFlashcards() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  currentIndex = 0;
  showingRussian = true;
  showCard();
}

function showCard() {
  const v = getFilteredVocab()[currentIndex];

  document.getElementById("app").innerHTML = `
    <div class="card" onclick="flipCard()">
      <h2>${showingRussian ? v.word : v.translation}</h2>
      <p>${showingRussian ? "Clique pour traduire" : v.example}</p>
    </div>
    <button onclick="nextCard()">Suivant</button>
  `;
}

function flipCard() {
  showingRussian = !showingRussian;
  showCard();
}

function nextCard() {
  currentIndex = (currentIndex + 1) % getFilteredVocab().length;
  showingRussian = true;
  showCard();
}

// =======================
// SYSTÈME SRS (POIDS)
// =======================
function getWeightedWord(list = VOCAB) {
  const weighted = [];

  list.forEach(v => {
    const mastery = v.mastery ?? 0;
    const weight = Math.max(1, 100 - mastery);

    for (let i = 0; i < weight; i++) {
      weighted.push(v);
    }
  });

  return weighted[Math.floor(Math.random() * weighted.length)];
}
// =======================
// QUIZ
// =======================
function startQuiz() {
  const vocabPool = getFilteredVocab();
  const q = getWeightedWord(vocabPool);

  const options = shuffle([
    q.translation,
    ...getWrongAnswers(q.translation)
  ]);

  document.getElementById("app").innerHTML = `
    <div class="card">
      <h2>${q.word}</h2>
      ${options.map(o => `
        <button onclick="checkAnswer('${o}', '${q.translation}', '${q.word}')">
          ${o}
        </button>
      `).join("")}
    </div>
  `;
}

function checkAnswer(answer, correct, word) {
  const v = VOCAB.find(x => x.word === word);

  if (!v.correct) v.correct = 0;
  if (!v.wrong) v.wrong = 0;
  if (!v.mastery) v.mastery = 0;

  if (answer === correct) {
    v.correct++;
    v.mastery += 15;
    alert("✔ Correct !");
  } else {
    v.wrong++;
    v.mastery -= 20;
    alert("❌ Faux !");
  }

  v.mastery = Math.max(0, Math.min(100, v.mastery));

  startQuiz();
}

// =======================
// ERREURS
// =======================
function showErrors() {
  const errors = VOCAB.filter(v => (v.wrong ?? 0) > 0);

  const app = document.getElementById("app");

  if (errors.length === 0) {
    app.innerHTML = "<p>🎉 Aucune erreur pour l’instant</p>";
    return;
  }

  app.innerHTML = errors.map(v => `
    <div class="word-block">
      <h3>${v.word} → ${v.translation}</h3>
      <p>❌ erreurs : ${v.wrong ?? 0}</p>
      <p>✔ bonnes réponses : ${v.correct ?? 0}</p>
      <p>exemple : ${v.example}</p>
    </div>
  `).join("");
}

// =======================
// UTILITAIRES
// =======================
function getWrongAnswers(correct) {
  return VOCAB
    .filter(v => v.translation !== correct)
    .map(v => v.translation)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

//=====================
//CATEG VOC
//=====================

function changeCategory(cat) {
  selectedCategory = cat;
  currentIndex = 0;
  renderLessons();
}
function getFilteredVocab() {
  if (selectedCategory === "all") return VOCAB;

  return VOCAB.filter(v => v.category === selectedCategory);
}

// =======================
// INIT APP
// =======================
window.onload = () => {
  renderLessons();
  showTab('lessons');
};