function wakeDog(name, breed) {
  const action = `Wake ${name} the ${breed}`;
  console.log(action);
  return action;
}

function leashDog(name, breed) {
  const action = `Leash ${name} the ${breed}`;
  console.log(action);
  return action;
}

function walkToPark(name, breed) {
  const action = `Walk to the park with ${name} the ${breed}`
  console.log(action)
  return action;
}

function throwFrisbee(name, breed) {
  const action = `Throw the frisbee for ${name} the ${breed}`
  console.log(action)
  return action;
}

function walkHome(name, breed) {
  const action = `Walk home with ${name} the ${breed}`
  console.log(action)
  return action;
}

function unleashDog(name, breed) {
  const action = `Unleash ${name} the ${breed}`
  console.log(action)
  return action;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let result = []
  for (let i = 0; i < routine.length; i++) {
    result.push(routine[i](dogName, dogBreed));
  }
  return result;
}