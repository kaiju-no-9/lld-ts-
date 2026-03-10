//Problem: Build a ShoppingCart class that manages items, supports a one-time discount code, and prevents modifications after checkout.
//Requirements:
//Private map/dictionary of items (item name to price)
//Private discount code (can only be applied once)
//Private isCheckedOut flag
//addItem(name, price): adds an item, but only if the cart hasn't been checked out
//applyDiscount(code): if the code is "SAVE10" and no discount has been applied yet, marks the discount as applied and stores it. Returns success/failure.
//getTotal(): returns the sum of all prices, minus 10% if a discount was applied
//checkout(): marks the cart as checked out if it has at least one item. After checkout, no items can be added and no discounts can be applied.

class ShoppingCart{
    private item :Map<string , number> = new Map
    private discountcode :boolean =false ;
    private CheckOut :boolean =false ;

    addItem(name :string , price :number){
           if(this.CheckOut){
            return console.log("  you have already checked out");
           }
           this.item.set(name , price );
    }

    applyDiscount(code:string):boolean {
        if ( code === "SAVE10" && this.discountcode===false  &&  this.CheckOut !=false){
             this.discountcode= true;
             return true ;
        }
      return false ;
    }
    getTotal():number{
          let total =0 ; 
           this.item.forEach((price)=>{
             total+=price
           });
           if(this.discountcode){
             return total =  total *0.9
           }
           
        return total; 
    }
    checkout():void{
        if (this.item.size>=1){
            this.CheckOut= true
            this.discountcode= true
        }

       
    }
}

 //TeatCase
const cart = new ShoppingCart();
cart.addItem("Laptop", 999.99);
cart.addItem("Mouse", 29.99);

console.log(`Total: $${cart.getTotal().toFixed(2)}`);                    // 1029.98

console.log(`Discount: ${cart.applyDiscount("SAVE10")}`);                // true
console.log(`Total: $${cart.getTotal().toFixed(2)}`);                    // 926.98

console.log(`Discount: ${cart.applyDiscount("SAVE10")}`);                // false

cart.checkout();
cart.addItem("Keyboard", 79.99); // Should be rejected
console.log(`Total: $${cart.getTotal().toFixed(2)}`);                    // 926.98