function getChai(kind: string | number) {
 if(kind === 'string') {
	return `Making  ${kind} chai ...` ;

 }
    return `Chai order : ${kind }`;

}

function serveChai(msg?: string ){
    if (msg) {
        return ` Serving ${msg}` ;

    }
    return `Serving default masala chai ${msg}`
}

function orderChai(size:"small" | "medium" | "large" | number ) {
      if(size ==="small") {
        return `small Cutting chai  `
      }

      if (size === 'medium' || size === "large") {

        return ` make extrs chai `

      }
      return  `chai order #${size}` 
      
}

class KulhadChai {
    serve (){
        return `Serving Kulhad Chai `
    }
}
class Cutting {
       serve (){
          return `Serving cutting Chai `
            
       }
}
function serve (chai:KulhadChai | Cutting){
       if(chai instanceof KulhadChai){
        return chai.serve();

       }
}

type Chaiorder ={
      type: string 
      sugar: number 

}

function  isChaiOrder (obj:any): obj is Chaiorder {
    return (
          typeof obj === "object" && 
          obj !== null && 
          typeof obj.type === "string" &&
          typeof obj.sugar === "number"

    )
} 

function serveOrder(item:Chaiorder | string  ){
    if(isChaiOrder(item)) {
        return  `Serving  ${item.type} chai with ${item.sugar} sugar `
    }
    return `Serving customp Chai `
}


type MasalChai={type: "masala"; spicelevel : number };
type GingerChai={type: "Ginger"; amount  : number };
type ElaichiChai={type: "elaichi"; aroma : number };


type Chai = MasalChai | GingerChai | ElaichiChai

function MakeChai (order:Chai){
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
         case "Ginger":
            return `Ginger chai`
         break;

         case "elaichi":
            return `Elaichi Chai `
       
    }
}

function brew(order:MasalChai | GingerChai){
      if("spicelevel" in order ) {

        // 
      }
}
function isStringArray(arr: unknown):arr is string[]{
    
}