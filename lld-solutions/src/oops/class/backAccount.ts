//Design Bank Account Class
//Problem: Create a BankAccount class that manages a simple bank account with deposit, withdrawal, and balance checking functionality.
//Requirements:
//Fields: accountNumber, ownerName, balance
//Constructor that initializes the account with owner name and account number (balance starts at 0)
//deposit(amount): adds money to balance (only positive amounts)
//withdraw(amount): removes money if sufficient balance exists, returns success/failure
//getBalance(): returns current balance


//Sol

class BankAccount {
    // Add private fields: accountNumber (string), ownerName (string), balance (number)
    private accountNumber :string;
    private ownerName :string;
    private  balance : number;

    constructor(accountNumber: string, ownerName: string) {
        // Initialize fields. Balance should start at 0.
        this.accountNumber= accountNumber;
        this.ownerName= ownerName;
        this.balance=0;
    }

    deposit(amount: number): void {
        // Add amount to balance (only if amount is positive)
         if (amount>0){
            this.balance+=amount ;
         }
        
    }

    withdraw(amount: number): boolean {
        // Remove amount from balance if sufficient funds exist
        if( this.balance >= amount &&  amount> 0){
            this.balance-=amount;
            return true;
        }
        // Return true if successful, false otherwise
        return false;
    }

    getBalance(): number {
        // Return the current balance
        return this.balance;
        return 0;
    }
}

// Test your implementation
const account = new BankAccount("123456", "John Doe");
account.deposit(1000);
console.log(account.getBalance().toFixed(1));  // Should print 1000.0

let success = account.withdraw(500);
console.log(success);                          // Should print true
console.log(account.getBalance().toFixed(1));  // Should print 500.0

success = account.withdraw(1000);
console.log(success);              