// 2.1 Create Arrays
let numbers = [1, 2, 3, 4];
let fruits = ["apel", "jeruk", "mangga"];
let mixed = [1, "halo", true];

// tampilkan
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Mixed:", mixed);

// 2.2 Array Methods
numbers.push(5);        // tambah belakang
numbers.pop();          // hapus belakang
numbers.shift();        // hapus depan
numbers.unshift(0);     // tambah depan

console.log("Setelah operasi:", numbers);
console.log("Panjang array:", numbers.length);

// 3.1 Create Object
let user = {
    nama: "Jaka",
    umur: 17,
    aktif: true
};

console.log("User:", user);

// 3.2 Access & Modify
console.log(user.nama);        // dot notation
console.log(user["umur"]);     // bracket notation

user.umur = 18;                // ubah nilai
user["nama"] = "Ihsan";

console.log("Setelah diubah:", user);

let angka = [1, 2, 3, 4, 5];

// map → ubah semua data
let kaliDua = angka.map(num => num * 2);
console.log("Map:", kaliDua);

// filter → ambil data tertentu
let genap = angka.filter(num => num % 2 === 0);
console.log("Filter:", genap);

// forEach → loop
angka.forEach(num => {
    console.log("ForEach:", num);
});

let users = [
    { nama: "A", umur: 16 },
    { nama: "B", umur: 18 },
    { nama: "C", umur: 20 }
];

// ambil user umur >= 18
let dewasa = users.filter(u => u.umur >= 18);
console.log("User dewasa:", dewasa);

// ambil nama saja
let namaUsers = users.map(u => u.nama);
console.log("Nama users:", namaUsers);