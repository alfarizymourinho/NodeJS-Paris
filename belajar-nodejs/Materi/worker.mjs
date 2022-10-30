import { parentPort } from "worker_threads";

parentPort.addListener("message", (message) => {
    for (let i = 0; 1 < message; i++){
        console.info(`Threads-${threadId} send message ${i}`);
        parentPort.postMessage(i);
    }
    parentPort.close();
})