let promise = new Promise(function (resolve, reject) {
  let a = 1 + 2;
  if (a == 3) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then((print) => {
    console.log(print);
  })
  .catch((print) => {
    console.log(print);
  });
