//Now let's see a complete encapsulated class with proper validation, 
//controlled access, and business rules. The BankAccount class keeps
// balance private and only allows modifications through deposit()
 // and withdraw(), each of which enforces its own rules.

 class BankAccount{
    private accountHolder : string;
    private balance :number ;
    
    constructor(accountHolder:string ){
        this.accountHolder = accountHolder;
        this.balance= 0 ;
    };
    deposit(amount:number){
        if(amount<=0){
           throw new Error(" Invalid  amount was entered ");
        }
        if(this.balance<=amount){
            throw new Error ("the entered amount is too much");
        }
        amount-=amount;
    
    }
    withdraw(amount:number){
        if(amount<=0){
            throw new Error(" Invalid  amount was entered ")
         }
    }
    getAmount():number{
        return this.balance
    }
    getAccounholder():string{
         return this.accountHolder
    }

 }