
const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("p1 is resolved");
    },5000)
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("p2 is resolved");
    },10000)
})

async function handlePromise() {
    console.log("hello world");

    const val1 = await p1;
    console.log("p1 printed");
    console.log(val1);
    
    const val2 = await p2;
    console.log("p1 printed");
    console.log(val2);


}

handlePromise();