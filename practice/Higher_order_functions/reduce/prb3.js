const arr =[5, 1, 3, 2, 6];

//sum of arr
const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);
//it is intialised with 0

//max of arr
const output1 =arr.reduce(function(max,curr){
    if(curr>max){
        max = curr;
}
     return max;
},0);

console.log(output,output1);