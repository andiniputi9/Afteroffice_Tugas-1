function getKategori(usia) {
    if (usia >= 0 && usia <= 12) return "Anak-anak";
    if (usia >= 13 && usia <= 17) return "Remaja";
    if (usia >= 18 && usia <= 59) return "Dewasa";
    if (usia >= 60) return "Lansia";
    return "Tidak valid";
}

function hitungKategori(daftarUsia) {
    const hasil = {
        "Anak-anak": 0,
        "Remaja": 0,
        "Dewasa": 0,
        "Lansia": 0
    };
    for (let usia of daftarUsia) {
        const kategori = getKategori(usia);
        if (hasil[kategori] !== undefined) {
            hasil[kategori]++;
        }
    }
    return hasil;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan usia (pisahkan dengan koma): ", (input) => {
    const daftarUsia = input.split(",").map(Number);
    const hasil = hitungKategori(daftarUsia);

    console.log("Hasil kategori usia:");
    for (let kategori in hasil) {
        console.log(`${kategori}: ${hasil[kategori]} orang`);
    }
    rl.close();
});