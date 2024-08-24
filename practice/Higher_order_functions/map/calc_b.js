const radius = [3,4,5,6];
//brute force approach
const Calc_Area = function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
};
console.log(Calc_Area(radius));

const Calc_circumference = function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}
console.log(Calc_circumference(radius));

const Calc_diameter = function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}
console.log(Calc_diameter(radius));





