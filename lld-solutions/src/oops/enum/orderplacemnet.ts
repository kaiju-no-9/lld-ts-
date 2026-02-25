//Let's build a small order processing system that uses two enums: OrderStatus (which we've already seen) and PaymentMethod.
// Together, they demonstrate how enums bring structure and safety to a real domain model.
//The Order class tracks an order's status, payment method, and total amount.
// It provides methods to advance the status through its lifecycle, cancel the order, and display order information.
//The key insight is that enums control the valid transitions: 
//an order can only move forward through the status chain (PLACED to CONFIRMED to SHIPPED to DELIVERED), 
// and cancellation is only allowed before shipping.
//Sol 

enum OrderSatus{
    PLACED = "PLACED",
    CONFIRMED= "CONFIRMED",
    SHIPPED= "SHIPPED",
    DELIVERED ="DELIVERED",
    CANCELED = "CANCELED"       
}
// CriditCard,DibitCard , UPI ,NETBANKING
class  PaymentMethod{
static  readonly CRIDITCARD= new  PaymentMethod( "CRIDITCARD" , 2.5);
static readonly UPI =new PaymentMethod("UPI" , 0.0);
static readonly DIBITCARD = new PaymentMethod("DIBITCARD" , 1.5);
static readonly NETBANKING = new PaymentMethod("NETBANKING", 1.2);
constructor(
public readonly displayName : String,
public readonly  platformFee : number
){}

}

//Logic for Paymentsucess

class Order {
// orderID , paymnentMethod , amoount
private Status : OrderSatus;
constructor(
 public readonly orderID :string , 
 public readonly paymentMethod : PaymentMethod,
 public readonly amount : number  
){
 this.Status=OrderSatus.PLACED;
      }
// this code for a sate mangemnt system 
advanceStatus():boolean{
 const  transation :Partial<Record<OrderSatus,OrderSatus>>={
       [OrderSatus.PLACED]:OrderSatus.CONFIRMED,
       [OrderSatus.CONFIRMED]:OrderSatus.SHIPPED,
       [OrderSatus.SHIPPED]:OrderSatus.DELIVERED
 }
   const next = transation[this.Status]
   if(next){
     this.Status= next
     return true;
   }
   return false ;
}  
cancel():boolean{
     if(this.Status === OrderSatus.PLACED || this.Status=== OrderSatus.CONFIRMED){
          this.Status= OrderSatus.CANCELED
          return true
     }
     return false 
}   
getTotalWithFee():number{
     return  this.amount + (this.amount* this.paymentMethod.platformFee/100);
}
displayInfo(): void {
     `Order : ${this.orderID} | OrderStatud: ${this.Status} |`+
     ` Payment : ${this.paymentMethod.displayName}|`+
     ` amount : ${this.amount} (with Tax: ${this.getTotalWithFee()})`
}

}

// Usage
const order = new Order("ORD-001", PaymentMethod.CRIDITCARD, 99.99);
order.displayInfo();
order.advanceStatus(); // PLACED -> CONFIRMED
order.advanceStatus(); // CONFIRMED -> SHIPPED
order.displayInfo();

console.log(`Cancel after shipping: ${order.cancel()}`); // falase