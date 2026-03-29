let response:any = " 42"

let numericLength :number =  (response as string ).length

type Book= {
      name: string
}

let bookStrcing = '{ "name": "who moved my cheese"}';
let bookObject = JSON.parse(bookStrcing) as Book;

console.log(bookObject);

// type assertion with DOM elements 
const inputElement = document.getElementById("username") as HTMLInputElement



// unkown and any 

let value:any

value=" chai"
value=[1,2,3,4]
value=2.5
value.toUpperCase() // this will not give any error because value is of tyoe any but it will give a runtime error  because value is not a string 


let newValue:unknown

newValue=" chai"
newValue=[1,2,3,4]
newValue=2.5
if(typeof  newValue === "string"){
    newValue.toUpperCase();
}


// try catch block  and guard check

try {
    
} catch (error) {
     if(error instanceof Error)  {
        console.log(error.message);
     }
     console.log("An error occurred" ,error);
}

const  data:unknown = " chai aur code "
const strData: string = data as string 

type  Role = "admin" | "user"

function redirectBasedOnRole (role:Role): void {
    if(role === "admin"){
          console.log( "Redirecting to admin dashboard");

    }
    if(role === "user"){
        console.log(" redirecting to user dashboard ");
        return;
        
    }
}