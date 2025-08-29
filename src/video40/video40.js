const score = [6, 7, 8, 9];
score.forEach((value, index) => {
    console.log(value, index);
})
//map
const map1 = score.map((value, index) => {
    return value * 2;
})
console.log(map1);
//filter
const filter1 = score.filter((value, index) => {
    return value > 7;
})
console.log(filter1);