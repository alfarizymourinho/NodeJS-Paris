//if bersarang(nested)
let minimarketstatus = "open";
let telur = "soldout";
let buah = "soldout";
if (minimarketstatus == "open") {
    console.log("saya akan membeli telu rdan buah")
    if (telur == "soldout" || buah == "soldout") {
        console.log("belanjaan saya tidak lengkap");
    } else if (telur == "soldout") {
        console.log("telur habis");
    } else if (buah == "soldout") {
        console.log("buah habis");
    }
} else {
    console.log("minimarket tutup, saya pulang lagi");
}