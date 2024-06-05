const words = process.argv[2].replace(/[.,;:"'_]/g, "").split(" ");
const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
const consonants = [
  "b",
  "B",
  "c",
  "C",
  "d",
  "D",
  "f",
  "F",
  "g",
  "G",
  "h",
  "H",
  "j",
  "J",
  "k",
  "K",
  "l",
  "L",
  "m",
  "M",
  "n",
  "N",
  "p",
  "P",
  "q",
  "Q",
  "r",
  "R",
  "s",
  "S",
  "t",
  "T",
  "v",
  "V",
  "w",
  "W",
  "x",
  "X",
  "y",
  "Y",
  "z",
  "Z",
];
let translatedWord;
const translatedPhrase = [];

for (let i = 0; i < words.length; i++) {
  const wordLetters = words[i].split("");
  //If a word starts with a vowel
  if (vowels.some((vowel) => vowel === wordLetters[0])) {
    translatedWord = words[i] + "way";
    translatedPhrase.push(translatedWord);
    //If a word starts with a consonant and a vowel
  } else if (
    consonants.some((consonant) => consonant === wordLetters[0]) &&
    vowels.some((vowel) => vowel === wordLetters[1])
  ) {
    if (wordLetters[0] === wordLetters[0].toLowerCase()) {
      translatedWord = words[i].slice(1) + words[i].substring(0, 1) + "ay";
      translatedPhrase.push(translatedWord);
    } else if (wordLetters[0] === wordLetters[0].toUpperCase()) {
      translatedWord =
        words[i].substring(1, 2).toUpperCase() +
        words[i].slice(2) +
        words[i].substring(0, 1).toLowerCase() +
        "ay";
      translatedPhrase.push(translatedWord);
    }
    //If a word starts with a 2 consonants
  } else if (
    consonants.some(
      (consonant) => consonant === wordLetters[0] && wordLetters[1]
    )
  ) {
    if (wordLetters[0] === wordLetters[0].toLowerCase()) {
      translatedWord = words[i].slice(2) + words[i].substring(0, 2) + "ay";
      translatedPhrase.push(translatedWord);
    } else if (wordLetters[0] === wordLetters[0].toUpperCase()) {
      translatedWord =
        words[i].substring(0, 1).toUpperCase() +
        words[i].slice(3) +
        words[i].substring(0, 2).toLowerCase() +
        "ay";
      translatedPhrase.push(translatedWord);
    }
  }
}

console.log(translatedPhrase.join(" "));
