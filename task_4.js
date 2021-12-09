// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;

function ElectricalAppliance(name) {
    this.name = name,
    this.isPlugged = false,
    this.plugIn = function() {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    },
    this.unplug = function() {
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    }
}

// Создать делегирующую связь [[Prototype]] для двух конкретных приборов;

function Lamp (name, power, brand, color) {
    this.name = name,
    this.power = power,
    this.brand = brand,
    this.color = color
};

function Computer(name, brand, type) {
    this.name = name,
    this.brand = brand,
    this.type = type
}


Lamp.prototype = new ElectricalAppliance();
Computer.prototype = new ElectricalAppliance();

let tableLamp = new Lamp('table lamp', 200, 'ikea', 'yellow');
let laptop = new Computer('laptop', 'Apple', 'Air');

console.log(tableLamp);
console.log(laptop);

// включить lamp в розетку
tableLamp.plugIn();
// включить laptop в розетку
laptop.plugIn();




