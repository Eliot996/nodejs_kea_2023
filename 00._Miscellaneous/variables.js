// You have to assign to a value when declaring a const
// const me

const me  = {
    // key: value -> key-value pairs
    name: "hans"
}

// Cannot reassign to const
// me = {} 

// But it is not immutable
me.name = "Cam"

console.log(me)


const hobbyOne = "Football skill level: '6'";
const hobbyTwo = 'Swimming skill level: "3"';
const hobbtThree = `Cooking skill level: ${2 + 2}`; // string interpolation - string template literal, can use js inside of a string

