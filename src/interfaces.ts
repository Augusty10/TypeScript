// inttefaces 

interface Chai {
    flavor: string
    price: number
    milk?: boolean;
}
const masaka:Chai ={
    flavor: "masala",
    price:30,
    milk: true
}
interface Shop{
    readonly id: number
    name: string 
}
const s:Shop ={
    id:1,
    name:"Tea Code  caffe"
}

// s.id=2

interface discountCalculator{
    (price:number):number 
}
const apply50: discountCalculator = (p) => p*0.5

interface TeaMachine{
    start( price:number):void
    stop():void
}

const machine: TeaMachine={
    start(price:number){
        console.log("start");
    },
    stop(){
        console.log("stop");
        
    }
}

interface Chairating{
    [flavor:string]:number 
}
const ratings: Chairating ={
    masla: 4.5,
    ginger:4.5,
    green:4.0,

}

interface user{
    name: string
}
interface User{
    name: string
    age:number
}

const u: User={
    name:" Raj",
    age: 22

}
interface A {
    a: string
}
interface B{
    b:string
}
interface C extends A,B{

}

