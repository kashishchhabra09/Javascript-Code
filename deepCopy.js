let originalObj = {
  name: "Tom",
  id: 20,
  address: {
    city: "Delhi",
  },
};
let copyObj = JSON.parse(JSON.stringify(originalObj));
copyObj.id = 25;
copyObj.address.city = "Mumbai";
console.log(originalObj);

console.log(copyObj);
