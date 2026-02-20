//Problem: Create a Book class for a library management system.
//Requirements:
//Fields: title, author, isbn, isAvailable
//Constructor that initializes all fields (book starts as available)
//borrowBook(): marks book as unavailable if currently available, returns success/failure
//returnBook(): marks book as available
//displayInfo(): prints book details including availability status

//Sol

class Book {
    // Add private fields: title (string), author (string), isbn (string), isAvailable (boolean)
       private title :string ;
       private isbn :string;
       private isAvailable : Boolean;
       private author :string;

       constructor(title:string, isbn:string , author:string){
         this.title= title;
         this.isbn =isbn;
         this.author= author;
         this.isAvailable=true;
       }
       borrowBook() :boolean {
         if(this.isAvailable){
              this.isAvailable =false;
              return true;
         }
    
        return false ;
       }
       returnBook():void {
        this.isAvailable=true;
       }
       displayBook():void {
         const status = this.isAvailable ? "Available":"Borrwwed"
         console.log(`Author:${this.author}  , ISBN: ${this.isbn} , title:${this.title},  Status:${status}`)

       }
    
}

// Test your implementation
const book = new Book("The Pragmatic Programmer", "David Thomas", "978-0135957059");
book.displayBook();

let success = book.borrowBook();
console.log(`Borrow successful: ${success}`);
book.displayBook();

success = book.borrowBook();
console.log(`Borrow successful: ${success}`);

book.returnBook();
book.displayBook();
