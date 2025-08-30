const name = "bui van ho bac";
const age = (new Date().getFullYear()) - 2011;
let isStudent;
if (age > 23) {
    isStudent = "Không";
} else {
    isStudent = "Có";
}
console.log(`
Xin chào ,mình là ${name}, năm nay ${age} tuổi.
Hiện tại mình ${isStudent} đi học.
    `);
console.log("============================");
const x = 10;
const y = 3;
console.log(`
Tổng :${x + y}
Hiệu:${x - y}   
Tích:${x * y}
Thương:${x / y}
Dư:${x % y}
Lũy thừa:${x ** y}
    `);
console.log("================================");
const tuoi = 34;
if (tuoi < 18) {
    console.log("Bạn còn nhỏ");
} else if (18 < tuoi && tuoi < 35) {
    console.log("Bạn thanh niên");
} else {
    console.log("Bạn trưởng thành");
}
//chapeter4
console.log("========================================");
let day = 5;
switch (day) {
    case 2:
        console.log("Thứ 2");
        break;
    case 3:
        console.log("Thứ 3");
        break;
    case 4:
        console.log("Thứ 4");
        break;
    case 5:
        console.log("Thứ 5");
        break;
    case 6:
        console.log("Thứ 6");
        break;
    case 7:
        console.log("Thứ 7");
        break;
    default:
        console.log("Chủ Nhật");
}
console.log("========================================");
let tong = 0;
for (let i = 1; i <= 100; i++) {
    tong += i;
}
console.log(tong);
console.log("==============================");
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
    }
    return true;
}
let result = isPrime(7);
console.log(result);
console.log("====================================");
const mang = [5, 4, 7, 8, 3, 6, 100];
function findMax(m) {
    let max = m[0];
    for (let i = 0; i < m.length; i++) {
        if (m[i] <= m[i + 1]) {
            max = m[i + 1];
        }
    }
    return max;
}
console.log(findMax(mang));
const ketqua = (m) => {
    let max = m[0];
    for (let i = 0; i < m.length; i++) {
        if (m[i] > max) {
            max = m[i];
        }
    }
    return max;
}
console.log(ketqua(mang));
const k = "bac";
function greeting(name) {
    return `xin chào,${name}`;
}
console.log(greeting(k));
//chapter05
console.log("================================");
const mang2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mang3 = mang2.filter((v, i) => {
    if (v % 2 == 0) {
        return v;
    }
})
console.log(mang3);
function tongz(m) {
    let tongm = 0;
    m.forEach((v, i) => {
        tongm += v;
    })
    return tongm;
}
console.log(tongz(mang2));
const mang4 = mang2.map((v, i) => {
    return v ** v;
})
console.log(mang4);
const student = {
    namebb: "bac",
    age2: 22,
    email: "buihobac@gmail.com"
}
console.log(`
Tên:${student.namebb},Tuổi:${student.age2},Email:${student.email}    
    `)
student['score'] = 10;
console.log(student);
delete student.email;
console.log(student);
const student2 = {
    namebb: "bac",
    age2: 22,
    email: "buihobac@gmail.com",
    socre: 7
}
const student3 = {
    namebb: "nam",
    age2: 24,
    email: "buihobac@gmail.com",
    socre: 8
}
const student4 = {
    namebb: "đông",
    age2: 23,
    email: "buihobac@gmail.com",
    socre: 9
}
const danhsach = [student2, student3, student4];
danhsach.forEach((v, i) => {
    if (v.score >= 8) {
        console.log("sinh viên có điểm >=8:", v);
    }

})
function findAge(m) {
    let maxage = m[0].age2;
    for (let i = 0; i < m.length; i++) {
        if (m[i].age2 >= maxage) {
            maxage = m[i].age2;
        }
    }
    return maxage;
}
console.log(findAge(danhsach));
console.log("=========================");
function xapxep(m) {
    for (let i = 0; i < m.length - 1; i++) {
        for (let j = i + 1; j < m.length; j++) {
            if (m[i].socre <= m[j].socre) {
                let tmp = m[i];
                m[i] = m[j];
                m[j] = tmp;
            }
        }
    }
    return m;
}
console.log(xapxep(danhsach));