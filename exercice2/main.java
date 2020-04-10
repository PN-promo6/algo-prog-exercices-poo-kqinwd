class Furniture {
    String editor;
    String designerName;
    int year;
    
    Furniture(String editor, String designerName, int year) {
        this.editor = editor;
        this.designerName = designerName;
        this.year = year;
    }
}


class Playground {
    public static void main(String[ ] args) {
    Furniture wassilyChair = new Furniture("Knoll", "Marcel Breuer", 1925);
        System.out.println("The Wassily Chair was created by " + wassilyChair.designerName + " and edited by " + wassilyChair.editor + " in " + wassilyChair.year + ".");
        wassilyChair.year = 1926;
        System.out.println(wassilyChair.year);

    }
}
