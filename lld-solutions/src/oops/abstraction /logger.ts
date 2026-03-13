//Let's build the logging system from the opening scenario. 
//The abstract Logger class has a level field, an abstract log() method that each subclass must implement, 
//and a concrete formatMessage() method that adds a timestamp and log level prefix. Every logger formats messages the same way, 
//but each one delivers the formatted message differently.

// abstract class for logic of logger {this is just for understanding }
abstract class Logger {
    protected level : string ;
    constructor(level :string){
        this.level =level 
    }

    abstract  log(message :string) :void ;

    Message_Formatter(message:string ) :string {
        //imp for timestamp  for the stat tie function  shared by all subclasses
        const time_stamp =  new  Date().toISOString().replace("T" , " ").substring(0,19)
         return `$[this.level] , ${message} , ${time_stamp}`;
    }
}
// imp diffrent logic  as per above abstaract
class ConsoleLog extends Logger {
    constructor(level :string){
        super(level);

    }
    log( message :string){
        console.log(this.Message_Formatter(message));
    }
}

class FileLog extends Logger {
     protected filePath :string ;
    constructor(level:string , filePath:string){
        super(level );
        this.filePath = filePath
    }
    log(message :string ){
        console.log(`filePath : ${this.filePath}  and time : ${this.Message_Formatter(message)}`)
    }

}
    