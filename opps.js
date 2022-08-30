let person = {
    first_name:'Mukul',
    last_name: 'Latiyan',
 
    //method
    getFunction : function(){
        return (`The name of the person is
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number : {
        mobile:'12345',
        landline:'6789'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);




class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
  }
  // Making object with the help of the constructor
  let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
  let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
   
  console.log(bike1.name);    // Hayabusa
  console.log(bike2.maker);   // Kawasaki
  console.log(bike1.getDetails());








  //encapsulation example
class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`Name is ${this.name},Address is: ${this.add}`);
    }
}
 
let person1 = new person('Mukul',21);
person1.add_Address('Delhi');
person1.getDetails();






class person{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}
class student extends person{
    constructor(name,id){

        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul',22);
console.log(student1.toString());