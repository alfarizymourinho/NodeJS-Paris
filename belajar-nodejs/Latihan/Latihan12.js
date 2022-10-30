let a, b;
let c = ""
for (let a = 2; a <= 6; a++){
    for (let b = a; b <= a + 4; b++){
        c+= b+""
    }
    c+="\n"
}
console.log(c);