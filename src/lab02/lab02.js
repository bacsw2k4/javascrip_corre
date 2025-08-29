console.log("lab02");
const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;
const diemTrungBinh = (a, b, c) => {
    return (a + b + c) / 3;
}
const k = diemTrungBinh(diemAnh, diemToan, diemVan);
console.log("Điểm Trung Bình:", k);
const xepLoai = (d) => {
    if (d >= 9 && d <= 10) {
        return "Xuất xắc";
    } else if (d >= 8) {
        return "Gioi";
    } else if (d >= 6.5) {
        return "Khá";
    } else {
        return "Trung Bình";
    }
}
const f = xepLoai(k);
console.log("xep loại:", f);