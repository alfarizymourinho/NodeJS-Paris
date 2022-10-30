// Looping persegi Panjang
let n = 8;
let string = "";
for (let i = 4; i < n; i++){
    for (let j = 0; j < n; j++){
        string += "#";
    }
    string += "\n";
}
console.log(string);