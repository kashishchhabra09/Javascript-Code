let originalObj = {
  name: "Tom",
  id: 20,
  address: {
    city: "Delhi",
  },
};
// let copyObj={...originalObj}
let copyObj = Object.assign({}, originalObj);
copyObj.id = 25;
copyObj.address.city = "Mumbai";
console.log(originalObj);

console.log(copyObj);
