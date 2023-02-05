//1
const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};

//2
const favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite",
};

//3
const teacher = {
  firstName: "Colt",
  sayHi() {
    return "hi!";
  },
  sayBye() {
    return teacher.firstName + " says bye!";
  },
};

//4
const createAnimal = (species, action, noise) => {
  return {
    species,
    [action]() {
      return noise;
    },
  };
};
