
class Emp{    
    name;    
    age;    
    constructor(name:string,age:number){             
        this.name =name;       
        this.age=age;    
    }   
    display(){        
        console.log("Name : "+this.name + " Age : "+this.age)    
    }
}

var a=new Emp("Raju",25);
a.display();

