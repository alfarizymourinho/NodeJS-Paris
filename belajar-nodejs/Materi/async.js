function samplePromise() {
    return Promise.resolve("Al-farizy M G")
}    
    async function run(){
    const name = await samplePromise();
    console.info(name);
}
run();