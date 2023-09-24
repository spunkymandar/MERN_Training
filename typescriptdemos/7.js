//creating class and object
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var item;
item = new Product(1, "Samsung Galaxy", 100); //create a new product
console.log(calculate(10, item)); //1000
function calculate(qty, item) {
    return qty * item.price;
}
