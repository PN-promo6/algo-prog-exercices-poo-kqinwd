<?php

class Furniture{
  public $editor;
  public $year;
  public $designer;

  function __construct($editor,$designer,$year){
    $this->editor = $editor;
    $this->designer = $designer;
    $this->year = $year;

  }
}
$wassilyChair = new Furniture("Knoll", "Marcel Breuer", 1925);
print_r($wassilyChair);

?>