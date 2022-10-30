import timers from "timer/promises";

//console.info(new Date());
//const name = await timers.setTimeout(1000, "Al-farizy M G");
//console.info(new Date());
//console.info(name);

for await (const startTime of timers.setInterval(1000, "ignored")) {
    console.info(`Start time at ${new Date()}`);
}