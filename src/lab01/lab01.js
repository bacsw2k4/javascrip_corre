console.log("lab01")
const name = "Bui Van Ho Bac";
const today = new Date();
const currentYear = today.getFullYear();
const birthdate = currentYear - 2008;
let isStudent;
if (birthdate >= 18 && birthdate <= 22) {
    isStudent = true;
} else {
    isStudent = false;
}
console.log(`Tên:${name} 
Tuổi:${birthdate}
SinhViên:${isStudent}`);