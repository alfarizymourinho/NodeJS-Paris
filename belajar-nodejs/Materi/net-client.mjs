import net from "net";

const client = net.createConnection({
    port: 3000,
    host:"localhost"
});

client.addListener("data", (data) => {
    console.info(`Recoive data from server : ${data.toString()}`)
});

setInterval(() => {
    client.write("Al-farizy M G\r\n");
},2000);