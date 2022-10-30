//Tugas Conditional if-else
let nama = "";
let peran = "";

if (nama == "" && peran == "") {
    console.log("Nama harus diisi")
}
else if (nama == "John" && peran == "") {
    console.log("Halo John,Pilih peranmu untuk memulai game!")
}
else if (nama == "Jane") {
    console.log("Selamat datang di Dunia Werewolf,jane")
    if (peran == "Penyihir") {
        console.log("Halo Penyihir Jane,Kmau dapat melihat siapa yg menjadi Werewolf!")
    }
}