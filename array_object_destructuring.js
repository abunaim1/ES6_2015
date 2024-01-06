// array destructuring
const num = [1, 2, 34, 5, 6, 7, 23, 1, 23];
const [a, b, c] = num;
// console.log(a, b, c);

// object destructuring
const obj = {
  name: "Naim",
  age: "24",
  status: "single",
  githum: "yes",
  friends: 10,
};

// const age = obj.age;
// console.log(age);

const { age, friends, status } = obj;
// console.log(age, friends, status);

const x = "friends";

const nastedObj = [
  {
    name: "NAME",
    age: "22",
    fb: "yes",
    friends: ["fahad", "sazid", "tanomoy", "amit", {
        relations : `They are my ${x}`
    }],
  },
  {},
  {},
];
// console.log(nastedObj.length);
// console.log(nastedObj[0].friends[3]);
// console.log(nastedObj[0].friends[4]);
// console.log(nastedObj[0].friends[4].relations);
