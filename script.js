const words = process.argv[2].replace(/[.,;:"'_]/g, "").split(" ");
const vowels = ["a", "e", "i", "o", "u"];
const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const wordLetters = words[0].split("");
if (vowels.some((vowel) => vowel === wordLetters[0])) {
  console.log("a word starts with a vowel");
} else if (
  consonants.some((consonant) => consonant === wordLetters[0]) &&
  vowels.some((vowel) => vowel === wordLetters[1])
) {
  console.log("a word starts with a consonant and a vowel");
} else if (
  consonants.some((consonant) => consonant === wordLetters[0] && wordLetters[1])
) {
  console.log("a word starts with two consonants");
} else {
  console.log("something else");
}
