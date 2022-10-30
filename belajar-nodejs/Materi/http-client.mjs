import https from "https";

const endpoint = "https://hookb.in/igmEeY3JLZhd6NOO616L";

const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application.json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstNamE: "aL-FARIZY",
    lastName: "M G",
})

request.wirite(body);
request.end();
