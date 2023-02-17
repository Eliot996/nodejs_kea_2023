const rocks = [
    { name: "Pet rock", age: 2},
    { name: "Led Zeppelin", age: 55},
    { name: "Dwayne Johnson", age: 50},
    { name: "Neptune", age: 100_000_000_000},
]

const rocksAgedOneYear = rocks.map(rock => {
    const newRock = Object.assign({}, rock);
    newRock.age += 1; 
    return newRock
})

console.log(rocks);
console.log(rocksAgedOneYear);

console.log("");
console.log("");
console.log("Even rocks: ");

const evenAgedRocks = rocks.filter(( rock => rock.age % 2 === 0));

console.log(evenAgedRocks);