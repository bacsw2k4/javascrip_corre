//array
const array = ["bac", "nam", "tung", "tuan", 2004, [1, 2, 3, 4, 5, 6]];
console.log(array);
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
array.forEach((value, index) => {
    console.log(value, index);
})
//truy cap mang
console.log(array[0]);
//update
array[2] = "tung hoai";
console.log(array);
// add last
array.push(1, 2, 3);
console.log(array);
//add fisrt
array.unshift(null);
console.log(array);
//delete last
array.pop();
console.log(array);
//delete fisrt
array.shift();
console.log(array);

