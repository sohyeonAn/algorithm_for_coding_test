const tokenReplace = (s, tokens) => {
  let start = null;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (start === null && s[i] === "$") {
      start = i;
    } else if (start !== null && s[i] === "$") {
      const replace = tokens[s.slice(start, i + 1)];
      result += replace;

      start = null;
    } else if (start === null && s[i] !== "$") {
      result += s[i];
    }
  }

  return result;
};

const tokens = {
  $A$: "lions",
  $B$: "tigers",
  $C$: "bears",
};
console.log(tokenReplace("$A$$B$$C$, oh my.", tokens)); // -> 'lionstigersbears, oh my.'
