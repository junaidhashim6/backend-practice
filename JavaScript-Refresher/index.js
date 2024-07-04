const name = "junaid";
const age = 27;
const hasHobbies = true;

const UserDetails = (userName, age, hobbies) => {
  return (
    "Name of the user is " +
    userName +
    " Age of the user is " +
    age +
    " Hobbies: " +
    hobbies
  );
};

console.log(UserDetails(name, age, hasHobbies));
