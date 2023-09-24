//creating class and object

class  Product {   
    id:number;      
    name:string ;
    price:number;
  
     constructor(id:number, name:string,price:number) {
         this.id=id;
         this.name=name;
         this.price=price;
     }
 }
  
 let item :Product
  
 item = new Product(1,"Samsung Galaxy", 100);    //create a new product
  
 console.log(calculate(10, item));       //1000
  
 function calculate(qty:number, item: Product):number {
   return qty * item.price;
 }