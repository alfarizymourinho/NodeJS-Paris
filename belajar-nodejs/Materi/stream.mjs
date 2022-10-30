import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Al-farizy\n");
writer.write("Mourinho\n");
writer.write("Galindra\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});