/**
 * 주어진 알파벳이 알맞은 사전적 순서라고 가정할 떄,
 * 모든 단어의 사전적 순서가 맞으면 true 아니면 false
 **/
// n = # of words in dictionary
// k = # length of longest word
// Time: O(nk)
// Space: O(1)
const detectDictionary = (dictionary, alphabet) => {
  for (let i = 0; i < dictionary.length - 1; i += 1) {
    const current = dictionary[i];
    const next = dictionary[i + 1];
    if (lexicalOrder(current, next, alphabet) === false) return false;
  }

  return true;
};

const lexicalOrder = (word1, word2, alphabet) => {
  const length = Math.max(word1.length, word2.length);
  for (let i = 0; i < length; i += 1) {
    const char1 = word1[i];
    const char2 = word2[i];
    const value1 = alphabet.indexOf(char1);
    const value2 = alphabet.indexOf(char2);

    if (value1 < value2) {
      return true;
    }
    if (value1 > value2) {
      return false;
    }
  }

  return true;
};

const dictionary = ["zoo", "tick", "tack", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";

console.log(detectDictionary(dictionary, alphabet));
