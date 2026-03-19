import { auth, provider, signInWithPopup } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

// API
const SHEET_API = "https://script.google.com/macros/s/AKfycbx-HYNwFlclPSl6b0j-wnyR1Yy046EDUiUldJKiprS6uVORVZCG7DrUVQT3-wnw8Ml8nA/exec";
// Load approved words from Google Sheets
async function loadApprovedWords() {
  try {
    const response = await fetch(`${SHEET_API}?action=getApproved`);
    const words = await response.json();
    
    if (words && words.length > 0) {
      words.forEach(word => {
        const dialect = word.region;
        if (wordBank[dialect]) {
          wordBank[dialect].push({
            word: word.word,
            dialect: word.dialect,
            correct: word.correct,
            choices: word.choices
          });
        }
      });
    }
  } catch (error) {
    console.error("Error loading approved words:", error);
  }
}

// DOM Elements
const wordEl = document.getElementById("word");
const dialectTag = document.getElementById("dialect-tag");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".choice-btn");
const pointsEl = document.getElementById("points");
const streakEl = document.getElementById("streak");

// Game State
let currentIndex = 0;
let score = 0;
let points = 0;
let streak = 0;
let sessionWords = buildSession();
let currentUser = null;

// Auth State
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user;
    document.getElementById("signin-btn").textContent = `مرحباً ${user.displayName} 👋`;
  }
});

// Google Sign In
document.getElementById("signin-btn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    currentUser = result.user;
    document.getElementById("signin-btn").textContent = `مرحباً ${currentUser.displayName} 👋`;
  } catch (error) {
    console.error("Sign in error:", error);
  }
});

// Start Game
document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "flex";
});

// Add Word Button (intro)
document.getElementById("add-word-btn-intro").addEventListener("click", showSubmitScreen);

// Back Button
document.getElementById("back-btn").addEventListener("click", showGameScreen);

// Submit Word Button
document.getElementById("submit-btn").addEventListener("click", submitWord);

// Score Board
function updateScoreboard() {
  pointsEl.textContent = points;
  streakEl.textContent = streak;
}

// Load Word
function loadWord() {
  const current = sessionWords[currentIndex];

  wordEl.textContent = current.word;
  dialectTag.textContent = current.dialect;
  result.textContent = "";

  const shuffled = [...current.choices].sort(() => Math.random() - 0.5);

  buttons.forEach((btn, i) => {
    btn.textContent = shuffled[i];
    btn.style.background = "#1e293b";
    btn.style.borderColor = "#334155";
    btn.disabled = false;
    btn.style.display = "block";
  });
}

// Answer Buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const current = sessionWords[currentIndex];

    if (btn.textContent === current.correct) {
      points += 10;
      streak++;

      if (streak % 5 === 0) {
        points += 5;
        result.textContent = `✅ صح! أحسنت 🔥 bonus +5`;
      } else {
        result.textContent = "✅ صح! أحسنت";
      }

      result.style.color = "#22c55e";
      btn.style.background = "#22c55e";
      btn.style.borderColor = "#22c55e";
      score++;

    } else {
      streak = 0;
      result.textContent = `❌ غلط! الإجابة الصحيحة هي: ${current.correct}`;
      result.style.color = "#ef4444";
      btn.style.background = "#ef4444";
      btn.style.borderColor = "#ef4444";

      buttons.forEach(b => {
        if (b.textContent === current.correct) {
          b.style.background = "#22c55e";
          b.style.borderColor = "#22c55e";
        }
      });
    }

    updateScoreboard();
    buttons.forEach(b => b.disabled = true);

    setTimeout(() => {
      currentIndex++;
      if (currentIndex < sessionWords.length) {
        loadWord();
      } else {
        endGame();
      }
    }, 3000);
  });
});

// End Game
async function endGame() {
  // TODO: replace 🎉 with player's Google profile picture after Firebase integration
  wordEl.textContent = "🎉";
  dialectTag.textContent = "";

  buttons.forEach(b => {
    b.style.display = "none";
  });

  result.innerHTML = `
    <p style="color:#f59e0b; font-size:1.3rem; margin-bottom:16px;">
      انتهت اللعبة! نتيجتك: ${score} / ${sessionWords.length} | نقاطك: ${points}
    </p>
    <button id="restart-btn">العب مرة ثانية 🔄</button>
    <br/><br/>
    <button id="add-word-btn">أضف كلمة من لهجتك ✍️</button>
  `;

  document.getElementById("restart-btn").addEventListener("click", restartGame);
  document.getElementById("add-word-btn").addEventListener("click", showSubmitScreen);

  // Save score to Google Sheets if user is signed in
  if (currentUser) {
    try {
      await fetch(SHEET_API, {
        method: "POST",
        body: JSON.stringify({
          type: "leaderboard",
          name: currentUser.displayName,
          email: currentUser.email,
          points: points,
        })
      });
    } catch (error) {
      console.error("Error saving score:", error);
    }
  }
}

// Restart Game
function restartGame() {
  currentIndex = 0;
  score = 0;
  points = 0;
  streak = 0;
  updateScoreboard();
  sessionWords = buildSession();
  result.innerHTML = "";
  loadWord();
}

// Screen Navigation
function showSubmitScreen() {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("submit-screen").style.display = "flex";
}

function showGameScreen() {
  document.getElementById("submit-screen").style.display = "none";
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "flex";
}

// Submit Word
async function submitWord() {
  const word = document.getElementById("input-word").value.trim();
  const region = document.getElementById("input-region").value;
  const meaning = document.getElementById("input-meaning").value.trim();
  const submitResult = document.getElementById("submit-result");

  if (!word || !region || !meaning) {
    submitResult.textContent = "⚠️ من فضلك املأ كل الحقول!";
    submitResult.style.color = "#ef4444";
    return;
  }

  try {
    await fetch(SHEET_API, {
      method: "POST",
      body: JSON.stringify({
        type: "submission",
        word: word,
        region: region,
        meaning: meaning,
      })
    });
  } catch (error) {
    console.error("Error submitting word:", error);
  }

  submitResult.textContent = "✅ شكراً! تم إرسال الكلمة بنجاح";
  submitResult.style.color = "#22c55e";

  document.getElementById("input-word").value = "";
  document.getElementById("input-region").value = "";
  document.getElementById("input-meaning").value = "";
}

// Leaderboard
document.getElementById("leaderboard-btn").addEventListener("click", showLeaderboard);
document.getElementById("leaderboard-back-btn").addEventListener("click", () => {
  document.getElementById("leaderboard-screen").style.display = "none";
  document.getElementById("intro-screen").style.display = "flex";
});

async function showLeaderboard() {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("leaderboard-screen").style.display = "flex";

  const list = document.getElementById("leaderboard-list");
  list.innerHTML = "<p style='color:#94a3b8;'>جاري التحميل...</p>";

  try {
    const response = await fetch(SHEET_API);
    const players = await response.json();

    if (players.length === 0) {
      list.innerHTML = "<p style='color:#94a3b8;'>لا يوجد لاعبون بعد!</p>";
      return;
    }

    const medals = ["🥇", "🥈", "🥉"];

    list.innerHTML = players.slice(0, 10).map((player, i) => `
      <div class="leaderboard-row">
        <span class="leaderboard-rank">${medals[i] || `${i + 1}`}</span>
        <span class="leaderboard-name">${player.name}</span>
        <span class="leaderboard-points">${player.points} نقطة</span>
      </div>
    `).join("");

  } catch (error) {
    list.innerHTML = "<p style='color:#ef4444;'>خطأ في تحميل البيانات</p>";
    console.error(error);
  }
}

async function loadApprovedWords() {
  try {
    const response = await fetch(`${SHEET_API}?action=getApproved`);
    const words = await response.json();

    if (words && words.length > 0) {
      words.forEach(word => {
        const region = word.region;

        // Auto-generate fake answers from other words in the bank
        const allCorrectAnswers = Object.values(wordBank)
          .flat()
          .map(w => w.correct)
          .filter(c => c !== word.correct);

        const shuffledAnswers = allCorrectAnswers
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);

        const choices = [word.correct, ...shuffledAnswers]
          .sort(() => Math.random() - 0.5);

        const newWord = {
          word: word.word,
          dialect: `🌍 ${region}`,
          correct: word.correct,
          choices: choices
        };

        // Add to existing dialect or create new one
        if (wordBank[region]) {
          wordBank[region].push(newWord);
        } else {
          wordBank[region] = [newWord];
        }
      });
    }
  } catch (error) {
    console.error("Error loading approved words:", error);
  }
};
