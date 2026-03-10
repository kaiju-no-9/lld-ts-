//Problem: Build a TemperatureSensor class that collects temperature readings and provides statistical access.
 //The sensor should validate that readings fall within a reasonable range and never expose its internal list of readings directly.
//Requirements:
//Private list of readings
//addReading(value): adds a temperature reading, but only if it's between -50 and 150 degrees (inclusive). Reject out-of-range values.
//getAverage(): returns the average of all readings, or 0 if no readings exist
//getReadingCount(): returns how many readings have been recorded
//getReadings(): returns a copy of the readings list (not the original)


class TemperatureSensor{
    // metaing a list here 
    private list :number[]=[];

    addReading(value:number){
        if (-50<=value && value<=150){
            this.list.push(value)
        }

    }
    getAverage():number{
        // here acoom isthe currentValue , int is adding up value 
       const sum = this.list.reduce((accum , int )=> accum+int , 0);
       const avg = sum / this.list.length
       return avg; 
        
    }
    getReadingCount():number{
        return this.list.length
       
    }
    getReadings():number[]{
        return [...this.list];
    }
}
const sensor = new TemperatureSensor();
sensor.addReading(22.5);
sensor.addReading(23.1);
sensor.addReading(200.0);  // Should be rejected
sensor.addReading(-10.0);

console.log(`Count: ${sensor.getReadingCount()}`);  // 3
console.log(`Average: ${sensor.getAverage()}`);     // 11.87