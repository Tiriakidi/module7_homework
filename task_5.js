class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
};

class Lamp extends ElectricalAppliance {
  constructor (name, brand, power, color) {
    super(name, power);
    this.brand = brand;
    this.color = color;
    this.isPlugged = true;
  }
}

class Computer extends ElectricalAppliance {
  constructor(name, brand, power, type) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;
  }
}


const tableLamp = new Lamp("Table lamp", "Ikea", 20, "red");

const laptop = new Computer("laptop", "Mac", 200, "Air");

tableLamp.unplug();

laptop.plugIn();

console.log(laptop)
console.log(tableLamp)