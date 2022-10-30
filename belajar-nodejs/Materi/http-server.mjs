import http from "http";

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);

    response.write("Hello World");
    response.end();
});
server.listen(3000);