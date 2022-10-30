import process from "process";
import http from "http";

if (cluster.isPrimary) {
    console.info(`primary:${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.addListener("exit", (Worker) => {
        console.info(`worker-${worker.id} is exit`);
    })
}

if (cluster.isWorker) {
    console.info(`worker:${process.pid}`);

    const server = http.createServer((request, response) => {
        response.write(`Response from process ${process.pid}`);
        response.end();
        process.exit();
    });

    server.listen(3000);
}