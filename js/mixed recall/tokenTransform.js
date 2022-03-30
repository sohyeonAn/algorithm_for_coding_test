const tokenTransform = (s, tokens) => {
  let start = null;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (start === null && s[i] === "$") {
      start = i;
    } else if (start !== null && s[i] === "$") {
      const replace = tokens[s.slice(start, i + 1)];
      const evaluatedValue = tokenTransform(replace, tokens);
      result += evaluatedValue;

      start = null;
    } else if (start === null && s[i] !== "$") {
      result += s[i];
    }
  }

  return result;
};

const tokens = {
  $0$: "$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$",
  $1$: "$2$$2$$2$$2$$2$$2$$2$$2$$2$",
  $2$: "$3$$3$$3$$3$$3$$3$$3$",
  $3$: "$4$$4$$4$$4$$4$$4$",
  $4$: "$5$$5$$5$$5$$5$",
  $5$: "$6$$6$$6$$6$",
  $6$: "$7$$7$$7$",
  $7$: "$8$$8$",
  $8$: "",
};
console.log(tokenTransform("z$0$z$0$z$0$z$0$z$0$z$0$z", tokens));
// -> 'zzzzzzz'
