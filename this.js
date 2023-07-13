const obj = {
  name: "Using This Keyword",
  number: 30,
  fun: function () {
    console.log(this.name, this.number);
  },
};
obj.fun();
