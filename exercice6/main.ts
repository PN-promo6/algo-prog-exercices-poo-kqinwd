// Exercice 6 : Créez une classe ClientProfessionnel qui étend la classe Client et qui a comme attribut un numéro SIRET. 

class Client {

    protected fullName: string;
    protected accountID: number;

    constructor(fullName: string, accountID: number) {
        this.fullName = fullName;
        this.accountID = accountID;
    }

    getFullName(): string {
        return this.fullName;
    }

    getAccountID(): number {
        return this.accountID;
    }

};

class ProfessionalClient extends Client {

    siretNumber: number;

    constructor(fullName: string, accountID: number, siretNumber: number) {
        super(fullName, accountID);
        this.siretNumber = siretNumber;
    }

    getSiretNumber(): number {
        return this.siretNumber;
    }

}

let firstClient: Client = new Client("Bill Gates", 537);
let secondClient: ProfessionalClient = new ProfessionalClient("Jeff Bezos", 777, 39233923923);

console.log("Nom du client : " + firstClient.getFullName());
console.log("N° de compte : " + firstClient.getAccountID());

console.log("Nom du client : " + secondClient.getFullName());
console.log("N° de compte : " + secondClient.getAccountID());
console.log("N° de siret : " + secondClient.getSiretNumber());
