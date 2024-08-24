const p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("p1 is sucessfully called");
        //reject("p1 is failed");
    },15000)
})
const p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("p2 is sucessfully called");
        // reject("p2 is failed");
    },3000)
})
const p3 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("p3 is sucessfully called");
        //reject("p3 is failed");
    },10000)
})
// which executes or settles fast it will be printed
Promise.race([p1,p2,p3])
    .then((res) => console.log(res))
    .catch((err) =>{
        console.error(err);
    });