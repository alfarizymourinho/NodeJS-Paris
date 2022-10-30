import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("console.log");

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("Hello World")
log.error("Ups");

const person = {
    firstName: "Al-farizy",
    lastName: " M G",
}

log.table(person);