let p = new Promise(function (resolve, reject) {
  let a = 1 + 2;
  if (a == 3) {
    resolve("Succes");
  } else {
    reject("Failed");
  }
});

p.then((msg) => {
  console.log(msg);
}).catch((msg) => {
  console.log(msg);
});
