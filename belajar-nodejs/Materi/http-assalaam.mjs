import http, { request } from "http";

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);

    if (request.method === "POST") {
        request.addListener("data", (data) => {
            response.setHeader("Content-Type", "application/json");
            response.write(data);
            response.end();
        })

    } else {
        if (request.url == "/paris") {
            response.write("Hello Paris");
        } else if (request.url == "/Assalaam") {
            response.write("Selamat datang di SMK ASSALAAM");
        } else {
            response.write("HELLO HTTP SERVER");
        }
    
        response.end();
    }
});
server.listen(5000);