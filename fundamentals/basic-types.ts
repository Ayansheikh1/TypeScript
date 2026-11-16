// 1. Create a username variable
// 2. Create an age variable
// 3. Create an isLoggedIn variable
// 4. Create an array of skills
// 5. Create an array of product prices
// 6. Create a user object
// 7. Create a variable that accepts string or null
// 8. Create an unknown variable and narrow its type


let myName:string = "ayan";
let myAge:number = 24;

let isLoggedIn:boolean = false;

let skills:string[] =[
    "React","TypeScript","NodeJs"
]

let prices:number[] = [50,30,678];


let user:{
    myName:string;
    id:number;
    isActive:boolean;
} = {
    myName :"ayan",
    id : 24,
    isActive :true
};

let var1:string | null = null;


let unknownVariable:unknown = "hello";

if(typeof unknownVariable === "string"){
   console.log(unknownVariable.toUpperCase());//Type narrowing
    
}

console.log(myName,myAge,skills,prices,var1)

console.log(user);
