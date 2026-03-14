const wordBank = {
  tunisia: [
    {
      word: "سبّالة",
      dialect: "🇹🇳 تونسي",
      correct: "حنفية ماء",
      choices: ["حنفية ماء", "سلة مهملات", "مطبخ", "حديقة"]
    },
    {
      word: "محبس",
      dialect: "🇹🇳 تونسي",
      correct: "إناء لزراعة الزهور",
      choices: ["إناء لزراعة الزهور", "خاتم خطوبة", "سجن", "قفل"]
    }
  ],
  egypt: [
    {
      word: "عيّط",
      dialect: "🇪🇬 مصري",
      correct: "بكى",
      choices: ["بكى", "صرخ", "ضحك", "نام"]
    }
  ],
  morocco: [
    {
      word: "كاين",
      dialect: "🇲🇦 مغربي",
      correct: "موجود",
      choices: ["موجود", "ذهب", "انتهى", "جاء"]
    }
  ],
  algeria: [
    {
      word: "برك",
      dialect: "🇩🇿 جزائري",
      correct: "يكفي",
      choices: ["يكفي", "اجلس", "تحرك", "اصمت"]
    }
  ],
  iraq: [
    {
      word: "هسه",
      dialect: "🇮🇶 عراقي",
      correct: "الآن",
      choices: ["الآن", "هناك", "أمس", "بسرعة"]
    }
  ]
};

// Pick one random word from each dialect
function buildSession() {
  const dialects = Object.keys(wordBank);
  
  // Shuffle the dialect order
  const shuffled = dialects.sort(() => Math.random() - 0.5);
  
  // Pick one random word from each dialect
  return shuffled.map(dialect => {
    const words = wordBank[dialect];
    return words[Math.floor(Math.random() * words.length)];
  });
}

const sessionWords = buildSession();
console.log(sessionWords);