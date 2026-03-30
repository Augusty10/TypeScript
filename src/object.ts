const chai ={
    name: " Masala cahi ",
    price: 20,
    isHot: true
}
// {
//     name: string;
//     price:number;
//     isHot:boolean
// }

let tea: {
      name: string;
      price: number;
      isHot: boolean;

}
 tea = {
     name : " Ginger tea",
     price: 25,
     isHot: true 
}

type Tea ={
     name: string ;
     price : number ;
     ingredients: string[]
}
 const adrakChai: Tea ={
    name : " Adarak chai ",
    price: 25,
    ingredients: ["ginger ", " tea leaves", " water ", " sugar "]

 }



 type Cup = {size: string};

 let smallCup: Cup = {size: "200ml"}

 let bigCup = {size: "500ml", material: " steel"}

smallCup = bigCup 

type Brew = {brewTime: number }

const coffee = { brewTime: 5 , beans: "Arabica"}
const chaiBrew: Brew = coffee


// data types Spilltout 

type Item= {name: string , quantity: number  }
type Address= {street: string , pin: number }

type Order = {
      id: string;
      items: Item[];
      address: Address
}


type Chai = {
      name : string;
      price: number;
      isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
        console.log(" updatting chai with ", updates);
        
}
updateChai({price: 25})
updateChai({isHot: true})
updateChai({})  // partial updates allow all types of upadates include empty updates . 

type ChaiOrder ={
    name?: string;
    qunatity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
       console.log(" placing order with ", order);
       
} 
placeOrder({
      name: "Masala chai ",
      qunatity: 2
}) 


type KulhadChai ={
      name: string;
      price: number;
      isHot: boolean;
      ingredients: string[];
      brewTime: number 
}

type BasicChaiInfo = Pick<KulhadChai, "name" | "price">;

const chaiInfo: BasicChaiInfo={
         name: "kulhad Chai ",
         price: 30
}


type chaiNew ={
    name : string;
    price: number;
    isHot: boolean;
    ingredients: string[];
    brewTime: number 

}

type PublicChai = Omit<chaiNew, "ingeredients ">;


