// STEP 2
let nama = "Jaka";
const umur = 17;

// STEP 3
const hitung = (a, b) => a + b;

// STEP 4
console.log(`Nama: ${nama}, Umur: ${umur}`);

// STEP 5

// destructuring
const user = {
    nama: "Jaka",
    umur: 17
};

const { nama: n, umur: u } = user;
console.log("Destructuring:", n, u);

// spread
const angka = [1, 2, 3];
const angkaBaru = [...angka, 4, 5];
console.log("Spread:", angkaBaru);

// default parameter
const sapa = (nama = "Guest") => {
    console.log(`Halo ${nama}`);
};

sapa();
sapa("Ihsan");

// function test
console.log("Hasil hitung:", hitung(5, 3));