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




let var1:string | null = null;


let unknownVariable:unknown = "hello";

if(typeof unknownVariable === "string"){
   console.log(unknownVariable.toUpperCase());//Type narrowing
    
}

console.log(myName,myAge,skills,prices,var1)





//user object

let user:{
    name:string;
    age:number;
    email:string;
    skills:string[];
    isLoggedIn:boolean;
    profileImage: string | null;
} = {
    name:"ayan",
    age:24,
    email:"ayan123@ex.com",
    skills:["React","TypeScript","Node.js"],
    profileImage: null
}

console.log(user);

