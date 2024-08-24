const users = [
    { firstName : "uday" , lastName : "Kindinti" , Age : 23 },
    { firstName : "donald" , lastName : "trump" , Age : 55 },
    { firstName : "elon" , lastName : "musk" , Age : 52 },
    { firstName : "mark" , lastName : "zuck" , Age : 23 },
   
];

// print age below 30 first name;

const output = users.filter(x => x.Age<30).map(x => x.firstName);

console.log(output);

//do it with reduce

const output1 = users.reduce(function(acc,curr){
    if(acc.Age<30){
        acc=curr.firstName;
    }
    
    return acc;
},{})

console.log(output1);