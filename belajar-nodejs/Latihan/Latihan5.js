let rate = 5; // Masukan Nilai Antara 1-5
let Aplikasi = "MiChat ";
let ket;
if (rate >= 4 && rate <= 5) {
    ket = "Aplikasi " + Aplikasi + " Sangat Bagus"
} else if (rate >= 3 && rate < 4) {
    ket = "Aplikasi" + Aplikasi + " Bagus"
} else if (rate >= 2 && rate < 3) {
    ket = "Aplikasi " + Aplikasi + " Cukup Bagus"
} else if (rate >= 1 && rate < 2) {
    ket = "Aplikasi " + Aplikasi + " jelek"
} else if (rate >= 0 && rate < 1) {
    ket = "Aplikasi " + Aplikasi + " Sangat Jelek"
} else {
    ket = "Tidak valid";
}
console.log("Nama Aplikasi : " + Aplikasi)
console.log("Nilai Aplikasi = " + rate);
console.log("Keterangan : " + ket);