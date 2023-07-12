let outerfun = () => {
  let a = 20;
  let innerfun = () => {
    let b = 20;
    let sum = a + b;
    return sum;
  };
  return innerfun();
};

let result = outerfun();
console.log(result);
