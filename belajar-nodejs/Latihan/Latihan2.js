let gaji = 4500000;
let trsp = 10000;
let bpjs = 250000;
let infaq = 50000;
let p = 2.5 / 100;
let pajak = gaji * p;
let hari = 24;
let total = gaji = (pajak + bpjs + infaq) + (trsp * hari);
let potongan = pajak + bpjs + infaq;
let tunjangan = trsp * hari;

console.log("Nama : Ahmad");
console.log("Bekerja di Perusahaan : PT.SINGLELELAH ");
console.log("Gaji kotor :" + "Rp." + gaji);
console.log("====================");
console.log("Potongan Pajak 2,5% : " + "Rp." + (gaji * p));
console.log("Potongan BPJS :" + "Rp." + bpjs);
console.log("Potongan Infaq :" + "Rp." + infaq);
console.log("====================");
console.log("Total Potongan :" + (pajak + bpjs + infaq));
console.log("====================");
console.log("Total Tunjngan :" + (trsp * hari));
console.log("====================");
console.log("Perhitungan Gaji :");
console.log("(Gaji Kotor - Potongan )+ Tunjangan");
console.log("(4500000-412500)+240000");
console.log("====================");
console.log("Gaji Bersih :" + "Rp." + total);