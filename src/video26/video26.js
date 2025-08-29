//if élse
console.log("video 26")
if (10 > 5) {
    console.log("true")
} else if (11 > 10 && 10 > 6) {
    console.log('false')
} else {
    console.log("default")
}
//switch case
const score = 7;
switch (score) {
    case 9:
        console.log("giỏi")
        break
    case 7:
        console.log("good")
        break
    default:
        console.log("bad")

}
//for
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
//while
let scor = 10
while (scor > 0) {
    console.log(scor);
    scor--;
}
//do-while
let a = 10;
do {
    console.log('bui van ho bac');
    a--;
} while (a > 9);