let sv1 = {
    ten: "bac",
    tuoi: 22,
    diachi: {
        xa: "phuong dinh",
        huyen: "truc ninh",
        tinh: "nam dinh"
    }
}
let sv2 = {
    ten: "tung",
    tuoi: 22,
    diachi: {
        xa: "phuong dinh2",
        huyen: "truc ninh",
        tinh: "nam dinh"
    }
}
let sv3 = {
    ten: "anh",
    tuoi: 22,
    diachi: {
        xa: "phuong dinh3",
        huyen: "truc ninh",
        tinh: "nam dinh"
    }
}
const danhsach = [sv1, sv2, sv3]
console.log(danhsach);
danhsach.forEach((value, index) => {
    console.log(value.diachi.xa);
})
danhsach.forEach((value, index) => {
    console.log(value["diachi"]["xa"]);
})
//add atribiut
sv3.gioitinh = "nam";
sv1['gioitinh'] = 'nu';
console.log(sv3);
//delete addtribute
delete sv3.gioitinh;
//duyet thuoc tinh,gia tri:
//for_in,for_of
for (let key in sv3) {
    console.log(key, sv3[key]);
}
console.log("===")
for (let [k, v] of Object.entries(sv3)) {
    console.log(v);
}