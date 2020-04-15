<?php

class ShowTicket
{

  public $username;
  public $band;
  public $date;
  public $location;
  public $price;

  function __construct($username, $band, $date, $location, $price = null)
  {

    $this->username = $username;
    $this->band = $band;
    $this->date = $date;
    $this->location = $location;
    if (!is_null($price)) {
      $this->price = $price;
    }
  }

  function showTicketDetail()
  {

    $showTicketContent = "
      <p>Nom d'utilisateur : $this->username</p>
      <p>Nom du groupe : $this->band</p>
      <p>Date du concert : $this->date</p>
      <p>Lieu du concert : $this->location</p>
      ";
    if (!is_null($this->price)) {
      $showTicketContent = $showTicketContent . "<p>Prix de la place : $this->price</p>";
    }
    return $showTicketContent;
  }
}

$firstTicket = new ShowTicket("Val", "Daft Punk", "28.06.20", "Arènes de Nîmes", "35.O0€");
$secondTicket = new ShowTicket("Roxanne", "Phoenix", "06.08.20", "Docks des Suds");

echo ($firstTicket->showTicketDetail());
echo ($secondTicket->showTicketDetail());
