abstract class Item {

    name: string;
    size: number;

    constructor(name: string, size: number) {

        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {

    energy: number;
    size: number;

    constructor(name: string, energy: number) {

        super(name, 3);
        this.energy = energy;
    }
}

class Arrow extends Item {

    power: number;
    size: number;

    constructor(name: string, power: number) {

        super(name, 1);
        this.power = power;
    }
}

class Player {

    name: string;
    lifeCount: number;
    itemsTab: Array<Item>;
    inventorySizeUsed: number;

    constructor(name: string) {

        this.name = name;
        this.lifeCount = 3;
        this.itemsTab = new Array<Item>();
        this.inventorySizeUsed = 0;

    }

    addItem(item: Item): boolean {
        if (this.inventorySizeUsed + item.size < 9) {
            this.itemsTab.push(item);
            this.inventorySizeUsed += item.size; // += permet d'éviter d'écrire this.inventorySizeUsed = this.inventorySizeUsed + item.size;
            console.log(item.name + " à été ajouté");
            return true;
        } else {
            console.log("Votre inventaire est plein. Impossible d'ajouter " + item.name);
            return false;
        };
    }
}

let firstTeleporter: Teleporter = new Teleporter("Boomz", 300);
let secondTeleporter: Teleporter = new Teleporter("Toz", 600);

let firstArrow: Arrow = new Arrow("Artemis", 100);
let secondArrow: Arrow = new Arrow("Ike", 200);

let firstPlayer: Player = new Player("Link");

firstPlayer.addItem(firstTeleporter);
firstPlayer.addItem(firstTeleporter);
firstPlayer.addItem(secondTeleporter);

firstPlayer.addItem(secondArrow);
firstPlayer.addItem(firstArrow);

console.log(firstPlayer);