class Prakash

{

    name; age;

    constructor(name,age){

        this.name=name;

        this.age=age;

    }

     display()

    {

      console.log("Name : "+this.name)

      console.log("Age  : "+ this.age)

     }

}

class Raju  extends Prakash

{

    salary; desig;

   constructor(name,age,salary,desig){

      super(name,age);

      this.salary=salary;

      this.desig=desig;

   }

   displayAll(){

       console.log("======================= ")

    console.log("Name : "+this.name)

    console.log("Age  : "+ this.age)

    console.log("Name : "+this.salary)

    console.log("Age  : "+ this.desig)

    }

}

var v1=new Raju("Abi",25,5000,"Dev");

v1.display();

v1.displayAll();