const arr =[5, 1, 3, 2, 6];

//Double,triple
//binary - ["101", "1", "11", "10", "110"]

// const output = arr.map(function Double(x){
//             return x*2;
// });
// or
const output = arr.map((x) => x*2);
const output1 = arr.map((x) => x*3);
const output2 = arr.map((x) => x.toString(2));
console.log(output,output1,output2);