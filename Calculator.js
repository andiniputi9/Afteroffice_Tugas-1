const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Pilih operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");

rl.question("Masukkan nomor operasi: ", (menu) => {
    rl.question("Angka 1: ", (a) => {
        rl.question("Angka 2: ", (b) => {
            const angka1 = parseFloat(a);
            const angka2 = parseFloat(b);
            let hasil, operasi;

            switch (menu) {
                case "1":
                    hasil = angka1 + angka2;
                    operasi = "Penjumlahan";
                    break;
                case "2":
                    hasil = angka1 - angka2;
                    operasi = "Pengurangan";
                    break;
                case "3":
                    hasil = angka1 * angka2;
                    operasi = "Perkalian";
                    break;
                case "4":
                    operasi = "Pembagian";
                    if (angka2 === 0) {
                        console.log("Tidak bisa membagi dengan nol.");
                        rl.close();
                        return;
                    }
                    hasil = angka1 / angka2;
                    break;
                default:
                    console.log("Menu tidak valid.");
                    rl.close();
                    return;
            }

            console.log(`Operasi: ${operasi}`);
            console.log(`Angka 1: ${angka1}`);
            console.log(`Angka 2: ${angka2}`);
            console.log(`Hasil: ${hasil}`);
            rl.close();
        });
    });
});

/Users/anditup/Task-1/Calculator.js