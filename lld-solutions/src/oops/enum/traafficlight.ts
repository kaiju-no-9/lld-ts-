//Problem: Create a TrafficLight enum where each light has a color (RED, YELLOW, GREEN), a duration in seconds, and a next() 
//method that returns the next light in the cycle (RED -> GREEN -> YELLOW -> RED).
//Requirements:
//Each light has a duration property: RED = 30s, YELLOW = 5s, GREEN = 25s
//next() method returns the next TrafficLight in the cycle
//display() method prints the color and duration

class TrafficLight{
    static readonly RED  = new TrafficLight("Red" , 30);
    static readonly YELLOW  = new TrafficLight("YELLOW" , 5)
    static readonly  GREEN = new TrafficLight("GREEN", 25)
      
      readonly color :string;
      readonly duration :number;
     private constructor(color:string,duration:number){
         this.color = color;
         this.duration = duration
     }
     next(): TrafficLight{
         if (this=== TrafficLight.RED) return TrafficLight.GREEN;
         if(this === TrafficLight.GREEN) return TrafficLight.YELLOW;
         return TrafficLight.RED;
     }
     display():void{
          console.log(`COLOR : ${this.color}. | DURATION :  ${this.duration}`)
     }

}
// Test your implementation
let light = TrafficLight.RED;
for (let i = 0; i < 6; i++) {
   light.display();
   light = light.next();
}