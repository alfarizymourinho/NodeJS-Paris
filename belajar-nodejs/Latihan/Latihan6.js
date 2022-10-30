let tinggi = 1.5; // Masukan Tinggi Badan Anda dalam Satuan Meter
let berat = 50; // Masukan Berat Badan Anda dalam Satuan KG
let BMI = berat / (tinggi^2); //Menentukan Nilai BMI
let kondisi; // Menentukan Kondisi Berdasarkan Nilai yg di Dapatkan.
if (BMI < 18.5) {
    kondisi = "kondisi Tubuh Anda Kurus "
} else if ((BMI >= 18.5) && (BMI < 24.9)) {
    kondisi = "kondisi Tubuh Anda Normal"
} else if ((BMI >= 25) && (BMI < 29.9)) {
    kondisi = "kondisi Tubuh Anda Overweight"
} else if (BMI > 30) {
    kondisi = "kondisi Tubuh Anda Obesitas"
}  else {
    kondisi = "Tidak valid";
}
console.log("Tinggi Badan Anda:" + tinggi)
console.log("Berat Badan Anda:" + berat);
console.log("BMI :" + BMI)
console.log("Keterangan : " + kondisi);