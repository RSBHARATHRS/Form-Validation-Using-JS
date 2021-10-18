class Employees

{

    name; age;salary; desig;

    constructor(name,age,salary,desig){

        this.name=name;

        this.age=age;

        this.salary=salary;

        this.desig=desig;

    }

    displayAll(){

        console.log("======****************========= ")

     console.log("Name : "+this.name)

     console.log("Age  : "+ this.age)

     console.log("Name : "+this.salary)

     console.log("Age  : "+ this.desig)

     }

}

class Developer  extends Employees

{ 

   constructor(name,age,salary,desig){

      super(name,age,salary,desig);

      

   }

}

class Tester  extends Employees

{

   

   constructor(name,age,salary,desig){

      super(name,age,salary,desig);  

   }

}

class Manager  extends Employees

{

   constructor(name,age,salary,desig){

      super(name,age,salary,desig)

   }

}



var d1=new Developer("Darshan",25,50000,"Dev");

var t1=new Tester("Tarun",22,35000,"Tester");

var m1=new Manager("Manoj",35,75000,"Manager");

d1.displayAll();

t1.displayAll();

m1.displayAll();