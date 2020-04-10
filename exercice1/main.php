<?php

class Book {

    public $title;
    public $price;

    function __construct($title, $price){
        $this->title = $title;
        $this->price = $price;
    }

}

$book1 = new Book("book1", 12);
print_r($book1);
?>