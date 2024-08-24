const users = [
    { firstName : "uday" , lastName : "Kindinti" , Age : 23 },
    { firstName : "donald" , lastName : "trump" , Age : 55 },
    { firstName : "elon" , lastName : "musk" , Age : 52 },
    { firstName : "mark" , lastName : "zuck" , Age : 28 },
   
]

const output = users.map(x => x.firstName + " " + x.lastName);

console.log(output);