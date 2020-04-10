class Furniture {
    editor: string;
    designerName: string;
    year: number;
   
   constructor(editor: string, designerName: string, year: number) {
       this.editor = editor;
       this.designerName = designerName;
       this.year = year;
   }
   
   }
   
   let WassilyChair: Furniture = new Furniture("Knoll", "Marcel Breuer", 1925);
   
   
   console.log(WassilyChair);
   
   WassilyChair.year = 1926;
   
   console.log(WassilyChair.year)