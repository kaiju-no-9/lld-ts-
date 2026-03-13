// You don't always need abstract classes or interfaces to achieve abstraction. Sometimes a well-designed public API on a regular class is enough.
// When a class hides its internal complexity behind a few clean public methods, that's abstraction in action.

// Consider a DatabaseClient. The caller sees connect() and query(). 
// Behind the scenes, the class manages connection pooling, socket lifecycle, authentication handshakes, query parsing, and retry logic. 
// None of that is the caller's concern.
// this is just for showcase {will not work}
class DatabaseClient {
     private maxConnect : number ;
     private maxAttempts :number ;

     constructor(maxConnet:number , maxAttempts :number){
        this.maxAttempts= maxAttempts;
        this.maxConnect = maxConnet;
     }
     // clean apai end point 
     connect(host:string, port :string){
        this.openSocket(host, port);
        this.authenticate();
        this.openConnectionPool();
     }
     query(sql:string){
        const  prasedData = this.prastedQuery(sql);
        return this.repeatAttempt(prasedData)
     }

     // hidden layer 
     private openSocket(host:string , port:string):void {};
     private authenticate():void {} ;
     private openConnectionPool():void {};
     // getting sql parameters like 
     private prastedQuery(sql:string) : string{return sql.trim()}
     private repeatAttempt(query:string):string{
        for(let i = 0 ; i<= this.maxAttempts ; i++){
           try{
                 return  this.attemptQuery(query)  
           }catch(e){
               if( i === this.maxAttempts ){
                throw e;
               }
           }
        }
        return " "
     }
     private attemptQuery(query :string): string { return "result";}
}
