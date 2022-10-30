//equals
let angka = 100;
console.log(angka == 100); // true
console.log(angka == 20); // false

// not equals
let sifat = "rajin";
console.log(sifat != "rajin"); // true
console.log(sifat != "bandel"); // true

// strict equals
let no = 8;
console.log(no == "8"); // true,padahal "8" adalah string
console.log(no === "8"); // false,karan tipe data nya berbeda
console.log(no === 8); // true

// not srict equals
let nomor = 11;
console.log(nomor != "11"); // fale,padahal "11" adalah string
console.log(nomor !== "11"); // true,karna tipe datanya beerbeda
console.log(nomor !== 11); // fale,padahal "11" adalah string

let number = 17;
console.log(number < 20); // true
console.log(number > 17); // false
console.log(number >= 17); // true,karna terdapat sama dengan
console.log(number <= 20); // true