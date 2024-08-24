//optimized approach of calculate function

const radius=[3,4,5,6];

const Area = function(radius){
    return Math.PI*radius*radius;
}
const circumference = function(radius){
    return 2*Math.PI*radius;
}
const diameter = function(radius){
    return 2*radius;
}

// const Calculate = function(radius,logic){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

console.log(radius.map(Area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

// console.log(Calculate(radius,Area));
// console.log(Calculate(radius,circumference));
// console.log(Calculate(radius,diameter));