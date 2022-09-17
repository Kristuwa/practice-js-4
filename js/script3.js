// Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// Not found
const people1 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Alex"],
  },
];
//Not found
const people2 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

// jhon
const people3 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

const findNurciss = (arr) => {
  const usersWithoutFriend = arr.filter((user) => !user.know.length);
  //   console.log(usersWithoutFriend);

  if (usersWithoutFriend.length !== 1) {
    console.log("Not found");
    return;
  }
  const nameFriend = usersWithoutFriend[0].name;
  //   console.log(nameFriend);

  const isNurciss = arr.every(
    (user) => user.know.includes(nameFriend) || user.name === nameFriend
  );
  if (isNurciss) {
    console.log(nameFriend);
    return;
  }
  console.log("Not found");
};

findNurciss(people1);
findNurciss(people2);
findNurciss(people3);
