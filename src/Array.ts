const chaiFlavours: string[]=["Masala", "Adrak", "Elaichi", "Tulsi"]
const chaiPrice: number[]=[20,25,30,40]

const rating: Array<number>=[4.5, 5.0,3.8,4.2]

type Chai = {
      name: string;
      price: number;
      rating:number;
    
}

const menu: Chai[]=[
       {name:"Masala", price:15, rating:4.5},
       {name:"Adrak", price:20, rating:5.0},
    
]

const cities: string[]=["Delhi", "Mumbai", "Bangalore", "Chennai"]
cities.push("kolakata")

const table: number [][]=[
    [1,2,3],
    [4,5,6]
]

let chaiTuple: [string, number];
chaiTuple =["Masala", 20]
// chaiTuple=[20,"masala"] error

let userInfo: [string, number, boolean?]
userInfo =["hitesh", 100, true ]

const location:readonly[number, number]=[28.7041, 77.1025]

const cahiItesm: [name: string, price:number]=["Masala", 25]


// enumartion 

enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}
 const size= CupSize.LARGE

 enum Status {
    PENDING=100,
    SERVED, //101
    CANCELLED //102
 }

enum ChaiType {
    MASALA="Masala",
    GINGER="ginger"
}

function makeChai(type:ChaiType) {
    console.log(`making : ${type}`);
    
}
// makeChai(ChaiType.GINGER)

enum RandomEnum {
    ID = 1,
    NAME="chai"
}
const enum sugars{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}
const s = sugars.HIGH


let t: [string , number ]=["chai", 10]
t.push("extra")