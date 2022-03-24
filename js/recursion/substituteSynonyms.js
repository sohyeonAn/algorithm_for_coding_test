const substituteSynonyms = (sentence, synonyms) => {
  const words = sentence.split(" ");
  const arrays = generate(words, synonyms);
  return arrays.map((subarray) => subarray.join(" "));
};

const generate = (words, synonyms) => {
  if (words.length === 0) return [[]];

  const firstWord = words[0];
  const remaining = words.slice(1);

  if (firstWord in synonyms) {
    const result = [];
    const subarrays = generate(remaining, synonyms);
    for (let synonym of synonyms[firstWord]) {
      result.push(...subarrays.map((subarray) => [synonym, ...subarray]));
    }
    return result;
  } else {
    const subarrays = generate(remaining, synonyms);
    return subarrays.map((subarray) => [firstWord, ...subarray]);
  }
};

const sentence = "follow the yellow brick road";
const synonyms = {
  follow: ["chase", "pursue"],
  yellow: ["gold", "amber", "lemnon"],
};

console.log(substituteSynonyms(sentence, synonyms));
