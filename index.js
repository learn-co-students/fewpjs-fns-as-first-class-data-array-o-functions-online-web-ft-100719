function wakeDog(dogName, dogBreed) {
    const ret_msg = `Wake ${dogName} the ${dogBreed}`;
    console.log(ret_msg);
    return ret_msg;
}

function leashDog(dogName, dogBreed) {
    const ret_msg = `Leash ${dogName} the ${dogBreed}`;
    console.log(ret_msg);
    return ret_msg;
}

function walkToPark(dogName, dogBreed) {
    const ret_msg = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(ret_msg);
    return ret_msg;
}

function throwFrisbee(dogName, dogBreed) {
    const ret_msg = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(ret_msg);
    return ret_msg;
}

function walkHome(dogName, dogBreed) {
    const ret_msg = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(ret_msg);
    return ret_msg;
}

function unleashDog(dogName, dogBreed) {
    const ret_msg = `Unleash ${dogName} the ${dogBreed}`;
    console.log(ret_msg);
    return ret_msg;
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed) 
{   
    return routine.map (r => r(dogName, dogBreed));
    // routine.map {|r| r(dogName, dogBreed) }
}





