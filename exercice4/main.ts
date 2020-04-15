class Client {
  private fullName: string;
  private accountID: number;

  constructor(fullName: string, accountID: number) {
    this.fullName = fullName;
    this.accountID = accountID;
  }

  getAccountID(): number {
    return this.accountID;
  }
}

let firstClient: Client = new Client("Jeff Bezos", 777);
console.log(firstClient.getAccountID());
