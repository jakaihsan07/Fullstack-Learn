// var (old)
var nama = "Jaka";

// let (bisa diubah)
let umur = 17;

// const (tidak bisa diubah)
const negara = "Indonesia";

// tampilkan ke console
console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Negara:", negara);

// tampilkan ke halaman
document.write("<h3>Nama: " + nama + "</h3>");
document.write("<h3>Umur: " + umur + "</h3>");
document.write("<h3>Negara: " + negara + "</h3>");
// number
let angka = 10;

// string
let teks = "Hello World";

// boolean
let isActive = true;

// array
let buah = ["apel", "jeruk", "mangga"];

// object
let user = {
    nama: "Jaka",
    umur: 17
};

// cek tipe data
console.log(typeof angka);
console.log(typeof teks);
console.log(typeof isActive);
console.log(typeof buah);   // object
console.log(typeof user);

let a = 10;
let b = 5;
document.write("<h3>Nilai a: " + a + "</h3>");
document.write("<h3>Nilai b: " + b + "</h3>");
document.write("<h3>Tambah: " + (a + b) + "</h3>");
document.write("<h3>Kurang: " + (a - b) + "</h3>");
document.write("<h3>Kali: " + (a * b) + "</h3>");
document.write("<h3>Bagi: " + (a / b) + "</h3>");

// comparison
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a == 10); // true

// logical
let x = true;
let y = false;

console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false