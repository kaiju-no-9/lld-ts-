//implement HTTP Status Code
//(medium)
//Problem: Create an HttpStatus enum where each status has a numeric code and a message string.
//Requirements:
//Values: OK(200, "OK"), BAD_REQUEST(400, "Bad Request"), NOT_FOUND(404, "Not Found"), INTERNAL_SERVER_ERROR(500, "Internal Server Error")
//isSuccess() method that returns true if the code is less than 400
//display() method that prints "CODE MESSAGE" (e.g. "200 OK")
//A static fromCode(int) method that returns the HttpStatus for a given code, or null/None if not found


class HttpStatus {
     // we. code have private here but this time we are storing private sep in a different array
     static readonly OK = new HttpStatus("OK" , 200 );
     static readonly BAD_REQUEST = new HttpStatus("NOT_FOUND" , 400)
     static readonly INTERNAL_SERVER_ERROR = new HttpStatus("Internal Server Error", 500)
     static readonly NOT_FOUND = new HttpStatus("NOT FOUND" , 404)

     // optional
     private  static readonly ALL_VALUES= [
          HttpStatus.OK , HttpStatus.BAD_REQUEST , HttpStatus.INTERNAL_SERVER_ERROR
     ]




     readonly message:string;
     readonly code: number;
     constructor(message:string , code:number){  
          this.message= message;
          this.code = code;
     }

     isSuccess():boolean{
           return this.code<400
     }

     display():void{
           console.log(`message:${this.message} , code:${this.code}`)

     }
     static fromCode(code:number):HttpStatus |null{
           return HttpStatus.ALL_VALUES.find(s=>s.code===code) ?? null
     }
}
// USE test
HttpStatus.OK.display();
HttpStatus.NOT_FOUND.display();

console.log(`Is 200 success? ${HttpStatus.OK.isSuccess()}`);
console.log(`Is 404 success? ${HttpStatus.NOT_FOUND.isSuccess()}`);

const found = HttpStatus.fromCode(500);
if (found !== null) {
    process.stdout.write("Found by code 500: ");
    found.display();
}
