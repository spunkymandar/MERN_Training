//working with interface
interface  product {   
    id:number;      
    name:string ;
    price:number
 }
  
  
 let item :product
  
 item = { id:1, name: "Samsung Galaxy", price:100 }  
  
 
  
 function calculate(qty:number, item: product):number {
   return qty * item.price;
 }
 console.log(calculate(10, item));       //1000

