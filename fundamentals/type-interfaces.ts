// Exercise 1 – User type

// Create a User type containing:
// - id: number
// - name: string
// - email: string
// - isActive: boolean

type User = {
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}


// Exercise 2 – Product interface

// Create a Product interface containing:
// - id: number
// - title: string
// - price: number
// - category: string
// - description: optional string


interface Product{
    id:number;
    title:string;
    price:number;
    category:string;
    description?:string;
}


// Exercise 3 – Admin interface

// Create an Admin interface that extends User and adds:
// - role: string
// - permissions: string array

interface Admin extends User{
    role: string;
    permissions:string[];
}


// Exercise 4 – Union type

// Create a PaymentStatus type that accepts:
// - "Pending"
// - "Success"
// - "Failed"

type PaymentStatus = "Pending" | "Success" | "Failed";


// Exercise 5 – Function type

// Create a type called Calculator that accepts two numbers and returns a number.

type Calculator = (a:number,b:number) => number;