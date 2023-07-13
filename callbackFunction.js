let funA = (callback) => {
  console.log("Hello");
  callback();
};

let funB = () => {
  console.log("Callback Function");
};
funA(funB);
