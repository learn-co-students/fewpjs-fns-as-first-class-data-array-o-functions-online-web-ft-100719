function wakeDog(dog, breed) {
  const output = `Wake ${dog} the ${breed}`;
  console.log(output);
  return output;
}
function leashDog(dog, breed) {
  const output = `Leash ${dog} the ${breed}`;
  console.log(output);
  return output;
}
function walkToPark(dog, breed) {
  const output = `Walk to the park with ${dog} the ${breed}`;
  console.log(output);
  return output;
}
function throwFrisbee(dog, breed) {
  const output = `Throw the frisbee for ${dog} the ${breed}`;
  console.log(output);
  return output;
}
function walkHome(dog, breed) {
  const output = `Walk home with ${dog} the ${breed}`;
  console.log(output);
  return output;
}
function unleashDog(dog, breed) {
  const output = `Unleash ${dog} the ${breed}`;
  console.log(output);
  return output;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dog, breed) {
  let arrayToReturn = []
  for (let i = 0; i < routine.length; i++) {
    arrayToReturn[i] = routine[i](dog, breed);
  }
  return arrayToReturn;
}






