
const p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("p1 is sucessfully called");
        //reject("p1 is failed");
    },5000)
})
const p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        // resolve("p2 is sucessfully called");
        reject("p2 is failed");
    },3000)
})
const p3 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("p3 is sucessfully called");
        //reject("p3 is failed");
    },1000)
})

Promise.all([p1,p2,p3])
    .then((res) => console.log(res))
    .catch((err) =>{
        console.error(err);
    });

