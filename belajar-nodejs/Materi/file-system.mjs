import fs from "fs/promises";

const buffer = await fs.readFileSync(path, "file-system.mjs");

console.info(buffer.toString());
await fs.writeFile(file, temp.txt, data , "Hello Node.js");