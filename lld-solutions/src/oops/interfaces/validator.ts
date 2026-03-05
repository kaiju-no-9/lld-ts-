///Design Input Validator Class
//Problem: Build a registration system where multiple validation rules are applied to user input.
 //Each rule is a separate implementation of a Validator interface, and the RegistrationService
//  runs all validators before accepting the registration.
//Requirements:
//Validator interface with a validate(input) method that returns true if valid, false otherwise
//EmailValidator: returns true if the input contains @
//PasswordValidator: returns true if the input has 8 or more characters
//RegistrationService: takes a list of validators in its constructor. Its register(input)
//method runs all validators and prints whether the input passed or failed

//Sol 
interface Validator {
    validate(input:string):boolean;
}
class EmailValidator implements Validator{
    validate(input:string):boolean{
        return input.includes('@')
        }
    }

class PasswordValidator implements Validator{
    validate(input:string):boolean{
        return input.length>=8
        }
    }

class RegistrationOptions{
    validate:Validator[]
    constructor(validate:Validator[]){
        this.validate= validate
    }
    register(input:string){
        const allVaifdation = this.validate.every((v)=> v.validate(input))
        console.log(`Passed : ${allVaifdation ? "passed": "falid"}`)

    }
}

//Usage
const emailReg = new RegistrationOptions([new EmailValidator()]);
emailReg.register("user@example.com");
emailReg.register("invalid-email");

const passReg = new RegistrationOptions([new PasswordValidator()]);
passReg.register("strongpassword");
passReg.register("short");