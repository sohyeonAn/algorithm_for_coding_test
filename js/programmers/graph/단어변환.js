// https://programmers.co.kr/learn/courses/30/lessons/43163
// level 3
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0

function solution(begin, target, words) {
  var answer = 0;
  answer = explore(begin, 0, new Set());
  if (answer === Infinity) answer = 0;

  function explore(begin, step, visited) {
    if (begin === target) return step;
    let myStep = Infinity;
    visited.add(begin);

    for (let word of words) {
      if (visited.has(word)) continue;
      let diff = 0;

      for (let i = 0; i < word.length; i += 1) {
        if (begin[i] !== word[i]) diff += 1;
      }

      if (diff === 1) {
        myStep = Math.min(myStep, explore(word, step + 1, visited));
      }
    }

    return myStep;
  }
  return answer;
}
