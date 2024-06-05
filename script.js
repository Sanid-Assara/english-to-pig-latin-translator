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
  if (vowels.some((vowel) => vowel === wordLetters[0])) {
    translatedWord = words[i] + "way";
    translatedPhrase.push(translatedWord);
  } else if (
    consonants.some((consonant) => consonant === wordLetters[0]) &&
    vowels.some((vowel) => vowel === wordLetters[1])
  ) {
    translatedWord = words[i].slice(2) + "ay";
    translatedPhrase.push(translatedWord);
  } else if (
    consonants.some(
      (consonant) => consonant === wordLetters[0] && wordLetters[1]
    )
  ) {
    translatedWord = words[i].slice(2) + "ay";
    translatedPhrase.push(translatedWord);
  } else {
    console.log("something else");
  }
}

console.log(translatedPhrase.join(" "));
