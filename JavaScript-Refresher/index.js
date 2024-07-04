var name = "junaid";
var age = 27;
var hasHobbies = true;

function UserDetails(userName, age, hobbies) {
  return (
    "Name of the user is " +
    userName +
    " Age of the user is " +
    age +
    " Hobbies: " +
    hobbies
  );
}

console.log(UserDetails(name, age, hasHobbies))
