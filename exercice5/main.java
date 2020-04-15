class ShowTicket {

    public String username;
    public String band;
    public String date;
    public String location;
    public String price = "";
  
    public ShowTicket(String username, String band, String date, String location, String price) {
  
        this.username = username;
        this.band = band;
        this.date = date;
        this.location = location;
        this.price = price;
    }
  
      public ShowTicket(String username, String band, String date, String location) {
  
        this.username = username;
        this.band = band;
        this.date = date;
        this.location = location;
    }
  
  
      public String showTicketDetail(){
          String showTicketContent = "<p>Nom de l'utilisateur : " + this.username + "</p> <p> - Nom du groupe : " + this.band + "</p> <p> - Date du concert : " + this.date + "</p> <p> - Lieu du concert : " + this.location + "</p>";
          if(this.price != "") {
              showTicketContent =  showTicketContent + "<p> - Prix du billet : " + this.price + "</p>";
          }
          return showTicketContent;
      }
  }
  
  class Playground {
      public static void main(String[ ] args) {
        ShowTicket firstShowTicket = new ShowTicket ("Val", "Daft Punk", "28/06/20", "Arènes de Nîmes", "35.00€");
        ShowTicket secondShowTicket = new ShowTicket ("Roxanne", "Phoenix", "06/08/20", "Docks des Suds");
        System.out.println(firstShowTicket.showTicketDetail());
        System.out.println(secondShowTicket.showTicketDetail());
      }
  }