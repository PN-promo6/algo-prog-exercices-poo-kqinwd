class Character {

    lastname: string;
    firstname: string;
    birthdate: string = "";

    constructor (firstname: string, lastname: string, birthdate?: string) {

        this.firstname = firstname;
        this.lastname = lastname;
        if(birthdate) {
            this.birthdate = birthdate;
        }
    }

    fullName(){

        console.log("Full name: " + this.firstname + " " + this.lastname)
    }

    birthDate(){

        if(this.birthdate){
            console.log("Date of birth: " + this.birthdate);
        } else {
          console.log("No birth date.")
        }
        
    }
}

let firstCharacter = new Character("John", "Doe", "01/01/1980");
let secondCharacter = new Character("Rick", "Dangerous");

firstCharacter.fullName();
firstCharacter.birthDate();

secondCharacter.fullName();
secondCharacter.birthDate();

