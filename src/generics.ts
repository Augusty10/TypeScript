// genrics is template for creating reusable componnents.

function wrapInArray<T>(items:T): T[]{
    return [items]
}
wrapInArray("string")
wrapInArray(45)
wrapInArray({flavor:"Ginger"})


function pair<A,B>(a:A, b:B):[A,B]{
    return[a,b]

} 

pair("masala", 20)
pair("masala", {price: "10"})

interface  Box<T>{
    content:T
}
const numberBox: Box<number>= {
    content: 10
}
const numberBoxCup: Box<string>={
    content: " cup"
}

interface ApiPromise<T>{
    status:number,
    data:T
}

const res: ApiPromise<{flavor:string}> ={
      status:200,
      data:{flavor: "masala"}
}
