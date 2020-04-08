// Exercice 5 à réaliser en TypeScript, PHP et Java
//
// Créez une classe représentant une place de concert. Le constructeur de cette classe demande cinq paramètre dont un optionnel.
// La classe possède une méthode retournant en chaîne de caractères les détails de la place de concert sous forme de HTML.
// Exemple basique de chaîne de caractères retournée :
// "<p>Numéro de place : ${ this.username }</p>
// <p>Heure du concert : ${ this.hours }</p>"
//
// Dans un algorithme, créez deux instances de cette classe (la 1ère avec un paramètre optionnel, l’autre sans le paramètre optionnel), et afficher les détails de chaque objet crée.

class ShowTicket {

  userName: string;
  band: string;
  date: string;
  location: string;
  price: string = "";


  constructor(userName: string, band: string, date: string, location: string, price?: string) {

    this.userName = userName;
    this.band = band;
    this.date = date;
    this.location = location;
    if (price) {
      this.price = price;
    }

  }

  showTicketDetail(): string {
    let showTicketContent: string = `
    <p>Nom d'utilisateur : ${ this.userName }</p>
    <p>Nom du groupe : ${ this.band }</p>
    <p>Date du concert : ${ this.date }</p>
    <p>Lieu du concert : ${ this.location }</p>
    `
    if (this.price !== "") {
      showTicketContent = showTicketContent + `<p>Prix de la place : ${ this.price }</p>`
    }

    return showTicketContent;
  }
}

let firstShowTicket: ShowTicket = new ShowTicket("Val", "Daft Punk", "28/06/20", "Arènes de Nîmes", "35.00€");
let secondShowTicket: ShowTicket = new ShowTicket("Roxanne", "Phoenix", "06/08/20", "Dock des Suds");

console.log(firstShowTicket.showTicketDetail());
console.log(secondShowTicket.showTicketDetail());
