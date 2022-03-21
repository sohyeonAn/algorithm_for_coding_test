// 모법 답안 - hash table
// O(n)
const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const countS1 = {};
  const countS2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (!countS1[s1[i]]) countS1[s1[i]] = 1;
    else countS1[s1[i]] += 1;
    if (!countS2[s2[i]]) countS2[s2[i]] = 1;
    else countS2[s2[i]] += 1;
  }

  for (key in countS1) {
    if (!(key in countS2) || countS1[key] !== countS2[key]) return false;
  }
  return true;
};

// 나의 답안 - 소트
// O(nlogn) > O(n)
// const anagrams = (s1, s2) => {
//   if (s1.length !== s2.length) return false;
//   const sort1 = Array.from(s1).sort();
//   const sort2 = Array.from(s2).sort();

//   for (let i = 0; i < sort1.length; i++) {
//     if (sort1[i] !== sort2[i]) return false;
//   }
//   return true;
// };
