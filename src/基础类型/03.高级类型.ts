export { }

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}



function getSmallPet(): Fish | Bird {
    // ...
}

// let pet = getSmallPet();

// // 每一个成员访问都会报错
// if (pet.swim) {
//     pet.swim();
// }
// else if (pet.fly) {
//     pet.fly();
// }

let pet = getSmallPet();
// pet.layEggs(); // okay
pet.layEggs();    // errors