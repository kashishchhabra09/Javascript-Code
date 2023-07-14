let arr_destructuring = () => {
  let arr = [10, 20, 30, 40, 50, 60, 70, 80];
  let [a, b, ...c] = arr;
  console.log(c);
};
arr_destructuring();
