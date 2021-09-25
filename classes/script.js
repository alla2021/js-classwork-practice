class Car {
  constructor(model, year, country, fuel, speed) {
    this.model = model;
    this.year = year;
    this.country = country;
    this.fuel = fuel;
    this.speed = speed;
  }

  getInfo() {
    console.log(`Car is ${this.model}; Year is ${this.year}`)
  }

  setYear(value) {
    this.year = value;
  }

  calcTime(distance) {
    return distance / this.speed;
  }

  refuel(value) {
    this.fuel = value;
  }
}

const b = new Car('honda', 2021, 'Japan', 90, 70);
const y = new Car('audi', 2017, 'GE', 180 );

honda.getInfo();
audi.getInfo();

console.log(`honda`, honda)
// console.log(`audi`, audi)

honda.setYear(2022)

honda.calcTime(2000)

honda.refuel(120)

console.log(`honda.calcTime(2000)`, honda.calcTime(2000))

// console.log(`honda`, honda);


class Truck extends Car {
  constructor(model, year, country, fuel, speed, trailer, weight) {
    super(model, year, country, fuel, speed);
    this.trailer = trailer;
    this.weight = weight
  }

  refuel(value) {
    super.refuel(value);
    this.weight = this.weight + value;
  }
}

const maz = new Truck('volvo', 2015, 'DT', 300, 65, true, 7000);
console.log(`maz`, maz);

maz.getInfo()
maz.setYear(3434)
maz.refuel(500)

console.log(`maz`, maz);

const vehicle = [
  new Truck('volvo', 2015, 'DT', 300, 65, true, 7000),
  new Truck('volvo', 2015, 'DT', 300, 65, true, 7000),
  maz
];

console.log(`vehicle`, vehicle)

class PrintList {
  constructor(list) {
    this.list = list;
  }

  print() {
    for (let item of this.list) {
      document.write(`<p>${item.model}</p>`)
    }
  }
}

const printList = new PrintList(vehicle)

list.print()

class Marker {
  constructor(amount) {
    this.amount = amount
  }

  print(value) {}

}

const marker = new Marker('#000', 40);

marker.print('Lorem ipsum dolor sit amet')