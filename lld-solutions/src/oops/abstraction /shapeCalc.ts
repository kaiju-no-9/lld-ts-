//Problem: Build a shape calculation system using an abstract class. The abstract Shape 
//class has abstract methods for calculating area and perimeter, plus a concrete describe() method that all shapes inherit.

//Requirements:
//Abstract Shape class with: abstract area() and perimeter() methods, plus a concrete describe() 
//method that prints "Shape: [name], Area: [area], Perimeter: [perimeter]"
//Circle: takes a radius. Area = pi r^2, Perimeter = 2 pi * r
//Rectangle: takes width and height. Area = w h, Perimeter = 2 (w + h)
//describe() should work for any shape without modification

abstract class Shape{
   protected name :string ;
   
    constructor(name :string ){
        this.name = name;
    }
    abstract  primeter():number;
    abstract area():number;

    describe():void{
        console.log(`Shape :${this.name}   and the perimeter : ${this.primeter} area : ${this.primeter}`)
    }


};
class Circle extends Shape {
      private  Radius :number
      constructor(Radius :number){
        super("Circule")
        this.Radius= Radius
      }
    primeter(): number {
            return 2*Math.PI*this.Radius
    }
    area():number{
        return Math.PI*this.Radius*this.Radius
    }
      
    }
class Rectangle extends Shape{
   private Hight :number;
   private Wigth :number ;
   constructor(Hight:number , Wight :number){
    super("Rectangle")
    this.Hight=Hight;
    this.Wigth=Wight
   }
   primeter(): number {
    return  2* (this.Hight+this.Wigth)
     }
   area():number{
    return this.Hight*this.Wigth
   }

}

// USeCase

const circle: Shape = new Circle(5.0);
circle.describe();

const rectangle: Shape = new Rectangle(4.0, 6.0);
rectangle.describe();