const buffer = Buffer.from("Al-farizy Mourinho Galibdra", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("QWwtZmFyaXp5IE1vdXJpbmhvIEdhbGliZHJh", "base64");
console.info(bufferBase64.toString("utf8"));