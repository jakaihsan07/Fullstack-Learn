let nama = "Jaka";      // bisa berubah
const umur = 17;        // tidak berubah
const tambah = (a, b) => a + b;

console.log(nama);       // Output: Jaka
console.log(umur);       // Output: 17
console.log(tambah(5, 3)); // Output: 8

const user = {
    nama: "Jaka",
    umur: 17
};

const { nama: n, umur: u } = user;
console.log(n, u);

// spread
const angka = [1, 2, 3];
const angkaBaru = [...angka, 4, 5];
console.log(angkaBaru);

// default parameter
const sapa = (nama = "Guest") => {
    console.log(`Halo ${nama}`);
};

sapa();
sapa("Ihsan");
