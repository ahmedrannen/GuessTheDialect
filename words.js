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
    },
    {
      word: "كرهبة",
      dialect: "🇹🇳 تونسي",
      correct: "سيارة",
      choices: ["سيارة", "دراجة", "حافلة", "قطار"]
    }
  ],
  egypt: [
    {
      word: "عيّط",
      dialect: "🇪🇬 مصري",
      correct: "بكى",
      choices: ["بكى", "صرخ", "ضحك", "نام"]
    },
    {
      word: "عربية",
      dialect: "🇪🇬 مصري",
      correct: "سيارة",
      choices: ["سيارة", "قطار", "طائرة", "دراجة"]
    },
    {
      word: "فلوس",
      dialect: "🇪🇬 مصري",
      correct: "مال",
      choices: ["مال", "طعام", "ملابس", "أحذية"]
    }
  ],
  morocco: [
    {
      word: "كاين",
      dialect: "🇲🇦 مغربي",
      correct: "موجود",
      choices: ["موجود", "ذهب", "انتهى", "جاء"]
    },
    {
      word: "زوين",
      dialect: "🇲🇦 مغربي",
      correct: "جميل",
      choices: ["جميل", "قبيح", "كبير", "صغير"]
    },
    {
      word: "دابا",
      dialect: "🇲🇦 مغربي",
      correct: "الآن",
      choices: ["الآن", "غداً", "أمس", "بعد ساعة"]
    }
  ],
  algeria: [
    {
      word: "برك",
      dialect: "🇩🇿 جزائري",
      correct: "يكفي",
      choices: ["يكفي", "اجلس", "تحرك", "اصمت"]
    },
    {
      word: "واعر",
      dialect: "🇩🇿 جزائري",
      correct: "صعب",
      choices: ["صعب", "سهل", "جميل", "كبير"]
    },
    {
      word: "روحي",
      dialect: "🇩🇿 جزائري",
      correct: "اذهبي",
      choices: ["اذهبي", "تعالي", "اجلسي", "انتظري"]
    }
  ],
  libya: [
    {
      word: "شحال",
      dialect: "🇱🇾 ليبي",
      correct: "كم",
      choices: ["كم", "أين", "متى", "من"]
    },
    {
      word: "توّا",
      dialect: "🇱🇾 ليبي",
      correct: "الآن",
      choices: ["الآن", "غداً", "أمس", "لاحقاً"]
    },
    {
      word: "زيّن",
      dialect: "🇱🇾 ليبي",
      correct: "جيد",
      choices: ["جيد", "سيء", "كبير", "صغير"]
    }
  ],
  lebanon: [
    {
      word: "هلق",
      dialect: "🇱🇧 لبناني",
      correct: "الآن",
      choices: ["الآن", "غداً", "أمس", "بعدين"]
    },
    {
      word: "كتير",
      dialect: "🇱🇧 لبناني",
      correct: "كثير",
      choices: ["كثير", "قليل", "كبير", "صغير"]
    },
    {
      word: "منيح",
      dialect: "🇱🇧 لبناني",
      correct: "جيد",
      choices: ["جيد", "سيء", "جميل", "سريع"]
    }
  ],
  syria: [
    {
      word: "موش",
      dialect: "🇸🇾 سوري",
      correct: "ليس",
      choices: ["ليس", "نعم", "ربما", "دائماً"]
    },
    {
      word: "هلق",
      dialect: "🇸🇾 سوري",
      correct: "الآن",
      choices: ["الآن", "أمس", "غداً", "بعدين"]
    },
    {
      word: "يلا",
      dialect: "🇸🇾 سوري",
      correct: "هيا",
      choices: ["هيا", "اجلس", "انتظر", "تعال"]
    }
  ],
  palestine: [
    {
      word: "وين",
      dialect: "🇵🇸 فلسطيني",
      correct: "أين",
      choices: ["أين", "متى", "كيف", "من"]
    },
    {
      word: "هاظ",
      dialect: "🇵🇸 فلسطيني",
      correct: "هذا",
      choices: ["هذا", "ذاك", "هنا", "هناك"]
    },
    {
      word: "كيفك",
      dialect: "🇵🇸 فلسطيني",
      correct: "كيف حالك",
      choices: ["كيف حالك", "ما اسمك", "أين أنت", "ماذا تريد"]
    }
  ],
  jordan: [
    {
      word: "يسلمو",
      dialect: "🇯🇴 أردني",
      correct: "شكراً",
      choices: ["شكراً", "أهلاً", "معك السلامة", "صباح الخير"]
    },
    {
      word: "هاد",
      dialect: "🇯🇴 أردني",
      correct: "هذا",
      choices: ["هذا", "ذاك", "هنا", "هناك"]
    },
    {
      word: "زاكي",
      dialect: "🇯🇴 أردني",
      correct: "لذيذ",
      choices: ["لذيذ", "مر", "حار", "بارد"]
    }
  ],
  iraq: [
    {
      word: "هسه",
      dialect: "🇮🇶 عراقي",
      correct: "الآن",
      choices: ["الآن", "هناك", "أمس", "بسرعة"]
    },
    {
      word: "شكو",
      dialect: "🇮🇶 عراقي",
      correct: "ماذا يوجد",
      choices: ["ماذا يوجد", "كيف حالك", "أين أنت", "من أنت"]
    },
    {
      word: "چاي",
      dialect: "🇮🇶 عراقي",
      correct: "شاي",
      choices: ["شاي", "قهوة", "ماء", "عصير"]
    }
  ],
  saudi: [
    {
      word: "توّ",
      dialect: "🇸🇦 سعودي",
      correct: "الآن",
      choices: ["الآن", "غداً", "أمس", "بعدين"]
    },
    {
      word: "زين",
      dialect: "🇸🇦 سعودي",
      correct: "جيد",
      choices: ["جيد", "سيء", "كبير", "صغير"]
    },
    {
      word: "ايش",
      dialect: "🇸🇦 سعودي",
      correct: "ماذا",
      choices: ["ماذا", "أين", "متى", "كيف"]
    }
  ],
  yemen: [
    {
      word: "تعال",
      dialect: "🇾🇪 يمني",
      correct: "هلم",
      choices: ["هلم", "اذهب", "اجلس", "انتظر"]
    },
    {
      word: "هيّا",
      dialect: "🇾🇪 يمني",
      correct: "هيا بنا",
      choices: ["هيا بنا", "انتظر", "اجلس", "ارجع"]
    },
    {
      word: "وشّك",
      dialect: "🇾🇪 يمني",
      correct: "وجهك",
      choices: ["وجهك", "يدك", "رجلك", "شعرك"]
    }
  ],
  kuwait: [
    {
      word: "عساك",
      dialect: "🇰🇼 كويتي",
      correct: "أتمنى لك",
      choices: ["أتمنى لك", "شكراً", "أين أنت", "كيف حالك"]
    },
    {
      word: "يبه",
      dialect: "🇰🇼 كويتي",
      correct: "يا أبي",
      choices: ["يا أبي", "يا أمي", "يا أخي", "يا صديقي"]
    },
    {
      word: "چنه",
      dialect: "🇰🇼 كويتي",
      correct: "كأنه",
      choices: ["كأنه", "لأنه", "لكنه", "بعده"]
    }
  ],
  uae: [
    {
      word: "هاي",
      dialect: "🇦🇪 إماراتي",
      correct: "هذه",
      choices: ["هذه", "تلك", "هنا", "هناك"]
    },
    {
      word: "يلا بايّ",
      dialect: "🇦🇪 إماراتي",
      correct: "مع السلامة",
      choices: ["مع السلامة", "أهلاً", "صباح الخير", "كيف حالك"]
    },
    {
      word: "مرّه",
      dialect: "🇦🇪 إماراتي",
      correct: "جداً",
      choices: ["جداً", "أحياناً", "نادراً", "دائماً"]
    }
  ],
  qatar: [
    {
      word: "شفيك",
      dialect: "🇶🇦 قطري",
      correct: "ما بك",
      choices: ["ما بك", "كيف حالك", "أين أنت", "ماذا تريد"]
    },
    {
      word: "عندي",
      dialect: "🇶🇦 قطري",
      correct: "لديّ",
      choices: ["لديّ", "عليّ", "فيّ", "منّي"]
    },
    {
      word: "زين",
      dialect: "🇶🇦 قطري",
      correct: "جيد",
      choices: ["جيد", "سيء", "جميل", "قبيح"]
    }
  ],
  bahrain: [
    {
      word: "شلونك",
      dialect: "🇧🇭 بحريني",
      correct: "كيف حالك",
      choices: ["كيف حالك", "أين أنت", "ما اسمك", "ماذا تريد"]
    },
    {
      word: "ليش",
      dialect: "🇧🇭 بحريني",
      correct: "لماذا",
      choices: ["لماذا", "كيف", "متى", "أين"]
    },
    {
      word: "هني",
      dialect: "🇧🇭 بحريني",
      correct: "هنا",
      choices: ["هنا", "هناك", "بعيد", "قريب"]
    }
  ],
  oman: [
    {
      word: "لكن",
      dialect: "🇴🇲 عُماني",
      correct: "لكن",
      choices: ["لكن", "لأن", "إذن", "حتى"]
    },
    {
      word: "ويش",
      dialect: "🇴🇲 عُماني",
      correct: "ماذا",
      choices: ["ماذا", "أين", "متى", "كيف"]
    },
    {
      word: "زين",
      dialect: "🇴🇲 عُماني",
      correct: "جيد",
      choices: ["جيد", "سيء", "كبير", "صغير"]
    }
  ],
  sudan: [
    {
      word: "سمح",
      dialect: "🇸🇩 سوداني",
      correct: "جيد",
      choices: ["جيد", "سيء", "كبير", "صغير"]
    },
    {
      word: "قريّب",
      dialect: "🇸🇩 سوداني",
      correct: "قريباً",
      choices: ["قريباً", "بعيداً", "الآن", "غداً"]
    },
    {
      word: "زول",
      dialect: "🇸🇩 سوداني",
      correct: "شخص",
      choices: ["شخص", "مكان", "شيء", "وقت"]
    }
  ],
  mauritania: [
    {
      word: "أمان",
      dialect: "🇲🇷 موريتاني",
      correct: "ماء",
      choices: ["ماء", "نار", "هواء", "تراب"]
    },
    {
      word: "لمر",
      dialect: "🇲🇷 موريتاني",
      correct: "الأمر",
      choices: ["الأمر", "البيت", "الطعام", "الطريق"]
    },
    {
      word: "كيفن",
      dialect: "🇲🇷 موريتاني",
      correct: "كيف أنتم",
      choices: ["كيف أنتم", "أين أنتم", "ما اسمكم", "ماذا تريدون"]
    }
  ],
  somalia: [
    {
      word: "سلام",
      dialect: "🇸🇴 صومالي",
      correct: "تحية",
      choices: ["تحية", "وداع", "شكراً", "آسف"]
    },
    {
      word: "مياه",
      dialect: "🇸🇴 صومالي",
      correct: "ماء",
      choices: ["ماء", "طعام", "هواء", "نار"]
    },
    {
      word: "بيت",
      dialect: "🇸🇴 صومالي",
      correct: "منزل",
      choices: ["منزل", "مدرسة", "سوق", "مسجد"]
    }
  ],
  djibouti: [
    {
      word: "نعم",
      dialect: "🇩🇯 جيبوتي",
      correct: "موافق",
      choices: ["موافق", "رافض", "ربما", "لا أعرف"]
    },
    {
      word: "شكران",
      dialect: "🇩🇯 جيبوتي",
      correct: "شكراً",
      choices: ["شكراً", "أهلاً", "مع السلامة", "صباح الخير"]
    },
    {
      word: "ماء",
      dialect: "🇩🇯 جيبوتي",
      correct: "مياه",
      choices: ["مياه", "طعام", "هواء", "نار"]
    }
  ],
  comoros: [
    {
      word: "هيّا",
      dialect: "🇰🇲 قمري",
      correct: "تعال",
      choices: ["تعال", "اذهب", "اجلس", "انتظر"]
    },
    {
      word: "بركة",
      dialect: "🇰🇲 قمري",
      correct: "خير ونعمة",
      choices: ["خير ونعمة", "مشكلة", "تعب", "حزن"]
    },
    {
      word: "صباح",
      dialect: "🇰🇲 قمري",
      correct: "الصباح",
      choices: ["الصباح", "الليل", "الظهر", "المساء"]
    }
  ]
};

// Pick one random word from each dialect
function buildSession() {
  const dialects = Object.keys(wordBank);
  
  // Better shuffle using Fisher-Yates algorithm
  for (let i = dialects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dialects[i], dialects[j]] = [dialects[j], dialects[i]];
  }
  
  // Pick only 5 random dialects per round
  const selected = dialects.slice(0, 5);
  
  return selected.map(dialect => {
    const words = wordBank[dialect];
    return words[Math.floor(Math.random() * words.length)];
  });
}

const sessionWords = buildSession();
console.log(sessionWords);