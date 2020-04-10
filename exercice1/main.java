class Book {
    String title;
    int price;

    Book(String title, int price) {    
        this.title = title;
        this.price = price;
    }
}

class Playground {
    public static void main(String[ ] args) {
    Book book1 = new Book("L\'art de la guerre", 12);
        System.out.println(book1.title + " " + book1.price + "€");
    }
}