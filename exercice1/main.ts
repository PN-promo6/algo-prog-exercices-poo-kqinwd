class Book {
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

}

let book1 = new Book("book1", 12);

console.log(book1);