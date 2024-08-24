const users = [
    { firstName : "uday" , lastName : "Kindinti" , Age : 23 },
    { firstName : "donald" , lastName : "trump" , Age : 55 },
    { firstName : "elon" , lastName : "musk" , Age : 52 },
    { firstName : "mark" , lastName : "zuck" , Age : 23 }
   
];

// { 23:2} {55:1} {52:1}}

const output = users.reduce(function(acc,curr){
    if(acc[curr.Age]){
            acc[curr.Age] = ++acc[curr.Age];
    }
    else{
        acc[curr.Age] = 1;
    }
    return acc;
},{});

console.log(output);