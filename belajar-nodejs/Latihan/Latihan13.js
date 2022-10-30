let a, b, c = 3;
let hasil = ""
for (let a = 3; a <= 21; a += 2){
    for (let b = a; b <= c; b++){
        hasil += b + ""
    }
    hasil += "\n"
    c += 2;
    c=c+1
}
console.log(hasil);