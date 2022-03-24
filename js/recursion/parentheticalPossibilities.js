const parentheticalPossibilities = (s) => {
  if (s === "") return [""];

  const { remaining, chars } = getOptions(s);
  const suffixes = parentheticalPossibilities(remaining);
  const possibilities = [];

  for (let char of chars) {
    for (let suffix of suffixes) {
      possibilities.push(char + suffix);
    }
  }

  return possibilities;
};

const getOptions = (s) => {
  if (s[0] === "(") {
    const endIdx = s.indexOf(")");
    const remaining = s.slice(endIdx + 1);
    const chars = s.slice(1, endIdx).split("");
    return { remaining, chars };
  } else {
    return {
      remaining: s.slice(1),
      chars: [s[0]],
    };
  }
};

console.log(parentheticalPossibilities("x(mn)yz"));
console.log(parentheticalPossibilities("(qr)ab(stu)c"));
