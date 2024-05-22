export const calFact = (n) => {
  if (n === 0 || n === 1) return n;

  return n * calFact(n - 1);
};

export const checkBracketBalanced = (expr) => {
  let stack = [];
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];
    if (x === "(") {
      stack.push(x);
      continue;
    }

    if (x === ")") {
      if (stack.length === 0) return false;
      else stack.pop();
    }
  }
  return stack.length === 0;
};
