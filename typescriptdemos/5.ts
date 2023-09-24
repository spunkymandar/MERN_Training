//working with object
let person = {
    firstName: "Allie",
    lastName: "Grater",
    age: 50,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(person.fullName());

  type Employee={
    firstname:string,
    lastname:string
  }
  
  let emp:Employee
  
  emp={firstname:'john', lastname:'wiley'}

  //console.log(emp.firstname);