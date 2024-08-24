//this in global space gives global object - window,global(in node)
console.log(this);

//this are different in functions and the way we use functions
const student1 = {
    name : "cristiano",
    lastName : "Ronaldo",
    place:"portugal",
    x : function(){
        console.log(this.name +" "+ this.lastName + " from "+ this.place );
    }
}
student1.x();

//or
const obj = {
    name : "uday",
    lastName: "kindinti"
}
let s = function Student(place){
    
    console.log( this.name + " " + this.lastName + " "+place);
}
s.call(obj," uk");

//in arrow function this is enclosed in lexical state;
//it will print point towards global object(window)
const obj1 = {
    a :10,
    user : (() =>{
        console.log(this);
    })

}

obj1.user()
//in this case the arrow function will point towards obj2 as enclosed in lexical
const obj2 = {
    a :10,
    x2: function(){
       let user = (() =>{
            console.log(this);
        })
        user()
    }

}

obj2.x2()

//this keyword in DOM prints the HTML element 

