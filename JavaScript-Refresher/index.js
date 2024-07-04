// const name = "junaid";
// const age = 27;
// const hasHobbies = true;

// const UserDetails = (userName, age, hobbies) => {
//   return (
//     "Name of the user is " +
//     userName +
//     " Age of the user is " +
//     age +
//     " Hobbies: " +
//     hobbies
//   );
// };

// console.log(UserDetails(name, age, hasHobbies));

// Objects

const person = {
  name: "john",
  age: 25,
  greet() {
    console.log("hello my name is " + this.name);
  },
};
person.greet();
