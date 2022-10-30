import util from "util";

const firstname = "Al-farizy";
const lastname = "Mourinho Galindra";

console.info(`Hello ${firstname} ${lastname}`);
console.info(util.format("Hello %s %s", firstname, lastname));

const person = {
    firstname: "Al-farizy",
    lastname: "Mourinho Galindra"
};

console.info(`person : ${JSON.stringify(person)}`);
console.info(util.format("Person: %i", person));