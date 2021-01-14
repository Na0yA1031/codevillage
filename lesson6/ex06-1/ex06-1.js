const multiply100 = x => x * 100;
const multiply8 = x => x * 8;
const subtract5 = x => x - 5;
const add3 = x => x + 3;

const n = 10;

console.log(subtract5(multiply100(n)));
console.log(add3(multiply8(add3(n))))