//Design Log Formatter Class
//Problem: Build a logging system where the format of log messages is configurable.
//A Logger class writes log messages, but the format (plain text vs. JSON) is determined by an injected Formatter interface.
//Requirements:
//Formatter interface with a format(message) method that takes a string and returns a formatted string
//PlainFormatter: returns the message as-is (e.g., "Server started on port 8080")
//JsonFormatter: returns the message wrapped in JSON (e.g., {"log": "Server started on port 8080"})
//Logger class takes a Formatter in its constructor and has a log(message) method that formats the message, then prints it.

interface Formatter {
    format(message:string):void;
}
class PlainFormatter implements Formatter{
    format(message:string){
        return message
    }
}
class JsonFormatter implements Formatter{
    format(message:string){
        return message
    }
}

class Logger {
    private formater : Formatter;
    constructor(formater:Formatter){
        this.formater = formater
    }

    log(message:string):void{
       console.log( this.formater.format(message))
    }
}

//Uage
const plainLogger = new Logger(new PlainFormatter());
plainLogger.log("Server started on port 8080");

const jsonLogger = new Logger(new JsonFormatter());
jsonLogger.log("Server started on port 8080");