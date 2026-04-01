// class Chai {
//     flavor: string;
//     price: number;

//     // constructor(flavor: string, price: number){
//     //     this.flavor = flavor;
//     //     this.price = price;
//     // }

//       constructor(flavor: string){
//         this.flavor = flavor;
//         console.log(this);
        
//     }

// }
// const masalaChai = new Chai("masala", 2.50);
// masalaChai.flavor="masala" 



// Access Modifiers
class Chai {
    public flavor: string = "masala";
    private secretIngrediant="cardemon"

    revel(){
        return this.secretIngrediant  // ok 
    }
    protected shopName =" Chai Corner "
}



class Shop {
      protected shopname = "Chai Corner "

}

class Branch extends  Shop {
    getname(){ 
        return this.shopname

    }

}
new Branch().getname() // ok 


const c = new Chai()
c.revel()



class walet {
    #balance = 100

    getbalance(){
           return this.#balance
    }
}

const w = new walet()


class Cup{
    readonly capacity: number =250
    constructor(capacity:number){
        this.capacity=capacity
    }
} 

class ModerChai {
    private _sugar =2

    get sugar(){
        return this._sugar
    }
    set sugar(value:number){
        if(value<0){
            console.log("dto much sugar ");
            this._sugar = 0;
        } else {
            this._sugar = value;
        }
    }
}

const mc = new ModerChai()
mc.sugar = 5


// Static memebr 

class ekChai {
    static shopName = "chai Code"

    constructor (public flavor:string){

    }
}
console.log(ekChai.shopName);

abstract class Drink {
    abstract      make():void
}
class MyChai extends Drink{
    make(){
        console.log();
    }
}

class heter {
    heat(){}

}
class chaimaker {
    constructor(private heater:heter){
    }
    make (){
        this.heater.heat()    // compostion
    }
}