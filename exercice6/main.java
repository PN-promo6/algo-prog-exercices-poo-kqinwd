class Client {
    
    String fullName;
    int accountID;
    
    public Client(String fullName, int accountID) {
        
        this.fullName = fullName;
        this.accountID = accountID;
    }

}

class ProfessionalClient extends Client {
    int siretNumber;
    
    ProfessionalClient(String fullName, int accountID, int siretNumber) {
            super(fullName, accountID);
            this.siretNumber = siretNumber;
    }
}


class Playground {
    public static void main(String[ ] args) {
        Client firstClient = new Client ("Bill Gates", 628);
        ProfessionalClient secondClient = new ProfessionalClient ("Jeff Bezos", 777, 23823838);
        System.out.println("Nom du client : " + firstClient.fullName);
        System.out.println("N° de compte : " + firstClient.accountID);
        
        System.out.println("Nom du client : " + secondClient.fullName);
        System.out.println("N° de compte : " + secondClient.accountID);
        System.out.println("N° de siret : " + secondClient.siretNumber);
    }
}