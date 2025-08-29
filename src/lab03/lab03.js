const sanpham1 = {
    name: "iphone12",
    price: 2000000,
    inStock: true
}
const sanpham2 = {
    name: "iphone13",
    price: 2000000,
    inStock: false
}
const sanpham3 = {
    name: "iphone14",
    price: 2100000,
    inStock: true
}
const sanpham4 = {
    name: "iphone15",
    price: 2200000,
    inStock: true
}
const sanpham5 = {
    name: "iphone16",
    price: 2300000,
    inStock: true
}
const sanpham6 = {
    name: "iphone17",
    price: 2000000,
    inStock: true
}
const product = [sanpham1, sanpham2, sanpham3, sanpham4, sanpham5];
console.log(sanpham1.name);
sanpham2.price = 1500000;
product.forEach((v, i) => {
    console.log(v);
})
console.log("========================");
product.push(sanpham6);
product.forEach((v, i) => {
    console.log(v);
})
console.log("========================");
product.pop(sanpham6);
product.forEach((v, i) => {
    console.log(v);
})
console.log("========================");
product.forEach((v, i) => {
    console.log(v.name);
})
console.log("========================");
const pricearray = product.map((v, i) => {
    return v.price;
})
for (let i = 0; i < pricearray.length; i++) {
    console.log(pricearray[i]);
}
console.log("=========================");
const dshang = product.filter((v, i) => {
    return v.inStock;
})
for (let i = 0; i < dshang.length; i++) {
    console.log(dshang[i]);
}
console.log("=========================");
for (let k in sanpham1) {
    console.log(k, sanpham1[k]);
}