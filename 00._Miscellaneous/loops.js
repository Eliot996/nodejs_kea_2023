const rocks = [
    { name: "Pet rock", age: 2},
    { name: "Led Zeppelin", age: 50},
    { name: "Dwayne Johnson", age: 47},
    { name: "Neptune", age: 100_000_000_000},
]

const rocksAgedOneYear = rocks.map(rock => {
    const newRock = Object.assign({}, rock);
    newRock.age += 1; 
    return newRock
})

console.log(rocks);
console.log(rocksAgedOneYear);