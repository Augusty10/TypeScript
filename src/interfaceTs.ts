 type ChaiOrder ={
    type: string; 
    suagar: number;
    strong: boolean;
};

function  makeChai(order: ChaiOrder) {
    console.log(order);
    
    
}

function serveChai( order: ChaiOrder ) {
    console.log(order);
    

}

interface TeaRecipe {
      water: number;
      milk: number;
}

// class MasalaChai implements TeaRecipe {
//     water: number = 100;
//     milk: number = 50;

// }

 interface  CupSize {
    
  size: "small" | "medium"  

}

class Chai implements CupSize {
       size: "small" | "medium" = "small"
 }

//  type Response = {ok : true} | {ok : false }
//  class myRes implements Response{
//     ok: boolean = true;

//  }

type Teatype = "masala Cahi "  | " ginger chai "| " Cardmon chai " | "regular tea"

function orderChai  (t: Teatype) {
       console.log(t);
       
}


type BaseChai = {teaLeaves: number }
type Extra = {masala : number}

type MasalaChai = BaseChai & Extra 

const myCup : MasalaChai={
    teaLeaves:2,
    masala: 1
}


type user ={
     username: string ;
     bio?: string 
}

const u1:user ={username: "JohnDoe"}
const u2:user ={username:"Raj sahu " , bio:"dhanrajsahu.com "}


type config ={
        readonly appName: string ;
        version: string ;

}

const myConfig : config ={
      appName: "Masterji ",
      version: "10.00"

}
// myConfig.appName= "Masterji 20." // Error: Cannot assign to 'appName' beacause it os read only property 