
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

console.log(add(5,9));