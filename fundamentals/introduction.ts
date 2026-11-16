
//variable with explicit types
let username:string = "Ayan";
let age:number = 23;
let isActive:boolean  = true;

let height:number = 5.8;


console.log(username,age,isActive,height)


//variable using type inference

function add(a:number,b:number){
    return a+b;
}

let uName = "ayan";
let number =7

console.log(add(5,9));
console.log(uName,number);

//Example produce errors


let count:number = 24;

//count = "Twenty Four"; //developement time error

console.log(count);