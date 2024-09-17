//call

const std1 = {
    name: "goku",
    last: "son",
    place :"BallZ",
    x : function(){
        console.log(this.name+" "+this.last+" from "+" "+this.place);
    }
}
std1.x();
const std2 = {
    name: "lucifer",
    last: "morningstar",
    place :"DC"
}
std1.x.call(std2);

//apply

const std3 = {
    name: "goku",
    last: "son",
    place :"BallZ",
    x : function(age,power){
        console.log(this.name+" "+this.last+" from "+" "+this.place+" "+age+" "+power);
    }
}
std1.x();
const std4 = {
    name: "lucifer",
    last: "morningstar",
    place :"DC"
}
//in apply it takes first as key and from second argument it is a single object of array
std3.x.apply(std4,[23,"ruler of DC"]);

//in bind the function is binded to a variable so we can use it whenever we want by simply invoking it
let myAge = std3.x.bind(std3,24,"infintie");
console.log(myAge);
myAge();


